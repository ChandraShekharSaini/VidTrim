import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';
import path from 'path';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 3600;
const __dirname = path.resolve()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage(); 
const upload = multer({ storage });


app.post('/upload', upload.single('video'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No video file uploaded.');
    }

    try {
      
        console.log('Uploading and compressing the video...');
        const result = await cloudinary.uploader.upload_stream(
            {
                resource_type: 'video',
                folder: 'compressed_videos',
                transformation: [
                    { quality: 'auto', fetch_format: 'auto' }
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




import userRoutes from "./routes/user.routes.js"

app.use("", userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(parh.resolve(__dirname, "frontend", "dist", "index.html"))
})



// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
