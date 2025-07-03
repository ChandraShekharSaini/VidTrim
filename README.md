
---

🔗 **Live Demo:** [https://frontend-five-gamma-26.vercel.app](https://frontend-five-gamma-26.vercel.app)

---

## 📄 Project Report

You can view or download the complete project documentation here:

👉 [Download VidTrim.pdf](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/VidTrim.pdf)



# VidTrim ✂️ - Video Editing Made Simple



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?logo=react&logoColor=white)](https://www.mongodb.com/mern-stack)
[![Auth: Passport](https://img.shields.io/badge/Auth-Passport-34E27A?logo=passport&logoColor=white)](https://www.passportjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Material UI](https://img.shields.io/badge/Components-Material_UI-0081CB?logo=mui&logoColor=white)](https://mui.com)


# 🎥 VidTrim

A web-based video trimming tool built with the **MERN stack**, styled with **Tailwind CSS**, and enhanced with **Material UI** components.


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

## 📸 Screenshots

### 🏠 Home Page
![Homepage](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Home_Page.gif)

> This screen serves as the landing page, showcasing key features and navigation options for the VidTrim application.

---

### ✂️ Upload Video Page

![Upload Video Page - Trimming Interface](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Compress-Video-Page.jpg)

> This screen allows users to upload their videos for compression, providing an easy and efficient interface.

---

### 🆕 Create Account Page
![Upload Preview](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Sign-up.jpg)

> This screen allows new users to create an account by providing their basic information and credentials.


### 🔐 Sign In
![Upload Preview](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Sign-in.jpg)

> This screen allows existing users to securely sign in and access their VidTrim dashboard.

---

### 🙍‍♂️ Profile Page

![Profile Page](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Profile.jpg)

> This screen displays the user's profile information, including account details and uploaded videos.

---

### 📞 Contact Page

![Contact Page](https://github.com/ChandraShekharSaini/ChandraShekharSaini/blob/main/Contact.jpg)

> This screen allows users to get in touch with the VidTrim team for support, feedback, or inquiries.




## 🚀 Quick Start

💻 **Live Version:** [https://frontend-five-gamma-26.vercel.app](https://frontend-five-gamma-26.vercel.app)

### 📋 Prerequisites

Before you dive into **VidTrim**, make sure you have the following set up on your system:

- ⚙️ [Node.js](https://nodejs.org/) (v16 or higher) – Backend JavaScript runtime
- 🍃 [MongoDB](https://www.mongodb.com/) – NoSQL database (Local or Atlas)
- 🎞️ [FFmpeg](https://ffmpeg.org/) – For trimming, encoding & processing videos server-side
- 📦 [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) – To manage project dependencies
- 🧰 [Git](https://git-scm.com/) – Version control to clone & collaborate on the project
- 📮 [Postman](https://www.postman.com/) – Optional, but handy for testing APIs
- 🌐 A modern browser – Recommended: [Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/firefox/)

> ✅ Once you’ve got these tools installed, you’re all set to run VidTrim locally!



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
