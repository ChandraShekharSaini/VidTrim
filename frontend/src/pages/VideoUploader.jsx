import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import { IoCloudUploadOutline } from "react-icons/io5";

const VideoUpload = () => {



    const [videoFile, setVideoFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");
    const [compressedVideoUrl, setCompressedVideoUrl] = useState("");

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file && file.type.startsWith("video/")) {
            setVideoFile(file);
        } else {
            alert("Please upload a valid video file.");
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: { "video/*": [] },
    });



    return (
        <section className="flex justify-center items-center pt-6 w-full h-screen ">
            <div className=" w-[80%] border-[1px]   m-auto rounded-lg  bg-gray-100 flex flex-col text-center gap-5 p-5 ">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black font-sans">Compression Tool</h2>

                <div className="text-[#808080]  sm:text-lg  md:text-xl lg:text-2xl font-mono tracking-tighter">Quickly and easily compress large video files for smoother streaming,<br></br>
                    faster downloads, and storage</div>


                <form className="flex flex-col justify-center items-center ">
                    <div
                        {...getRootProps()}
                        className="border-2 border-dashed border-blue-500 p-10 w-full sm:w-[90%] md:w-[80%] lg:w-[50%] flex flex-col justify-center items-center rounded-md  cursor-pointer"
                    >
                        <div className=" text-[65px] sm:text-[100px] text-gray-500 mt-3 sm:mt-5">
                            <IoCloudUploadOutline />
                        </div>
                        <input {...getInputProps()}  className="hidden " />
                        <button
                            type="button"
                            className="mt-7 text-white px-8 sm:px-16 py-3 border-2 border-blue-500 bg-blue-500 rounded-full   font-semibold hover:bg-white hover:text-blue-500 transition duration-300"
                            onClick={(e) => {
                                e.stopPropagation();
                                document.querySelector('input[type="file"]').click();
                            }}
                        >
                            Upload File
                        </button>
                        <p className="mt-9 sm:mt-8 md:mt-6 lg:mt-5 text-lg text-gray-500">or drop your file here</p>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 mt-5 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
                    >
                        Upload Video
                    </button>
                </form>



            </div>
        </section>

    );
};

export default VideoUpload;
