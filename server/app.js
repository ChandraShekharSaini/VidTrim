import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

const app = express();
const PORT = 3600;

// Middleware for parsing JSON and URL-encoded data    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Initialize Multer and configure storage
const storage = multer.memoryStorage(); // Store files in memory as buffers
const upload = multer({ storage });

// Define the route for video upload and compression
app.post('/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }

    try {
        // Upload video to Cloudinary with compression
        console.log('Uploading and compressing the video...');
        const result = await cloudinary.uploader.upload_stream(
            { 
                resource_type: 'video', 
                folder: 'compressed_videos',
                transformation: [
                    { quality:'auto', fetch_format: 'auto' }  
                ]
            }, 
            (error, result) => {
                if (error) {
                    console.error('Error during upload:', error);
                    res.status(500).send('Error uploading video.');
                } else {
                    console.log('Compressed video uploaded:', result.secure_url);
                    res.status(200).json({
                        message: 'Video compressed and uploaded successfully!',
                        compressedVideoUrl: result.secure_url,
                    });
                }
            }
        );
        streamifier.createReadStream(req.file.buffer).pipe(result);

    } catch (error) {
        console.error('Error during video processing:', error);
        res.status(500).send('Error processing the video.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
