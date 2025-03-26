import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import VideoUpload from '../pages/VideoUploader'
import DownloadFile from '../pages/DownloadFile'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Profile from '../pages/Profile'
import Dasbord from '../pages/Dasbord'
import LoadingPage from '../pages/LoadingPage'
import ErrorPage from '../pages/ErrorPage'
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/download-video' element={<DownloadFile />} />
        <Route path='/video-upload' element={<VideoUpload />} />
        <Route path='/create-account/sign-up' element={<Signup />} />
        <Route path='/create-account/sign-in' element={<Login />} />
        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/dashboard' element={<Dasbord />} />
        <Route path='/loading' element={<LoadingPage />} />


        <Route path='*' index element={<ErrorPage />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App