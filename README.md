# VidTrim ✂️  

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?logo=react&logoColor=white)](https://www.mongodb.com/mern-stack)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A web-based video trimming tool built with **MERN stack** (MongoDB, Express, React, Node.js) and styled with **Tailwind CSS**. Trim, cut, and export videos effortlessly in your browser.

![VidTrim Demo](https://via.placeholder.com/800x400?text=VidTrim+Demo+GIF) <!-- Replace with actual demo GIF -->

## ✨ Features
- **Video Upload** (MP4, WebM, MOV)
- **Precision Trimming** (millisecond accuracy)
- **Preview Before Export**
- **User Authentication** (JWT)
- **Cloud Storage** (Cloudinary)
- **Responsive Design**

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16
- MongoDB (Local or Atlas)
- FFmpeg (for server-side processing)

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/vidtrim.git
cd vidtrim

# Install backend dependencies
cd server && npm install

# Install frontend dependencies
cd ../client && npm install
