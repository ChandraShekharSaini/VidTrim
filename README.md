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

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) ≥ 16
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- [FFmpeg](https://ffmpeg.org/) – for server-side video processing
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) – for dependency management
- [Git](https://git-scm.com/) – to clone the repository
- [Postman](https://www.postman.com/) – for testing APIs (optional but useful)
- A modern browser (Chrome, Firefox, etc.)



### ⚡ Installation
```bash
# Clone repository
git clone https://github.com/yourusername/vidtrim.git
cd vidtrim

# Install backend dependencies
cd server && npm install

# Install frontend dependencies (including Material UI)
cd ../client && npm install

## 🔧 Environment Configuration

### ⚙️ Backend Setup
Create a `.env` file in the `/server` directory with:

```env
# ========================
# 🗃️ Database Configuration
# ========================
MONGO_URI=mongodb://localhost:27017/vidtrim
# For MongoDB Atlas: mongodb+srv://<username>:<password>@cluster.mongodb.net/vidtrim

# ========================
# 🔒 Authentication Setup
# ========================
# 🔑 JWT Configuration
JWT_SECRET=your_strong_jwt_secret_here
JWT_EXPIRES_IN=30d

# 🔵 Google OAuth
GOOGLE_CLIENT_ID=your_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_secret_key
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback

# 🐙 GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_secret_key
GITHUB_CALLBACK_URL=http://localhost:5000/api/auth/github/callback

# ========================
# 📦 Cloudinary Setup
# ========================
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# ========================
# 🖥️ Server Configuration
# ========================
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
