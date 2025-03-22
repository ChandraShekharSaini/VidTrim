import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VideoUpload from '../pages/VideoUploader'
import DownloadFile from '../pages/DownloadFile'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/download-video' element={<DownloadFile />} />
        <Route path='/video-upload' element={<VideoUpload />} />
        <Route path='/create-account/sign-up' element={<Signup />} />
        <Route path='/create-account/sign-in' element={<Login />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App