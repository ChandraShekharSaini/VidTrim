import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VideoUpload from '../pages/VideoUploader'
import DownloadFile from '../pages/DownloadFile'
import Home from '../pages/Home'

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/download-video' element={<DownloadFile />} />
        <Route path='/video-upload' element={<VideoUpload />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App