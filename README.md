# VidTrim ✂️ - Video Editing Made Simple

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?logo=react&logoColor=white)](https://www.mongodb.com/mern-stack)
[![Auth: Passport](https://img.shields.io/badge/Auth-Passport-34E27A?logo=passport&logoColor=white)](https://www.passportjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Material UI](https://img.shields.io/badge/Components-Material_UI-0081CB?logo=mui&logoColor=white)](https://mui.com)

🎥 A web-based video trimming tool built with **MERN stack**, styled with **Tailwind CSS**, and enhanced with **Material UI** components.

![VidTrim Demo](demo.gif) <!-- Replace with actual demo file -->

## ✨ Features
- 🎨 **Modern UI** with Material UI components
- 📱 **Responsive Layout** using Tailwind CSS
- 📤 **Video Upload** (MP4, WebM, MOV)
- ✂️ **Precision Trimming** (millisecond accuracy)
- 👀 **Preview Before Export**
- 🔐 **Multi-Provider Authentication**
  - 🅶 Google OAuth
  - 🐙 GitHub OAuth
  - 🔑 JWT Local Auth
- ☁️ **Cloud Storage** (Cloudinary)

## 🛠️ Tech Stack
### 🖥️ Frontend
- ⚛️ **React** (v18+)
- 🧩 **Material UI** (v5+) - For reusable UI components
- 🎀 **Tailwind CSS** (v3+) - For utility-first styling
- 🎬 **FFmpeg.wasm** - For client-side video processing
- 📹 **React Player** - For video playback

### ⚙️ Backend
- 🟢 **Node.js** (v16+)
- 🚂 **Express.js** - REST API framework
- 🍃 **MongoDB** - Database
- 🐫 **Mongoose** - ODM for MongoDB
- 🔐 **Passport.js** - Authentication middleware
- ☁️ **Cloudinary** - For video storage

## 🚀 Quick Start

### 📋 Prerequisites
- Node.js ≥16
- MongoDB (Local or Atlas)
- FFmpeg (for server-side processing)
- Google OAuth Client ID
- GitHub OAuth Secret Key

### ⚡ Installation
```bash
# Clone repository
git clone https://github.com/yourusername/vidtrim.git
cd vidtrim

# Install backend dependencies
cd server && npm install

# Install frontend dependencies (including Material UI)
cd ../client && npm install


# Create environment file for backend
cat > .env << 'EOF'
# Database
MONGO_URI=mongodb://localhost:27017/vidtrim

# Authentication
JWT_SECRET=your_jwt_secret_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_secret

# Cloud Storage
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EOF
