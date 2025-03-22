import React from 'react'
import { RiDownloadLine } from "react-icons/ri";
import { CgCompressV } from "react-icons/cg";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";

const DownloadFile = () => {
  return (
    <section className='w-full min-h-screen bg-[#151519]'>

      <nav className=' h-[65px] bg-black flex items-center  gap-8 px-10'>
        <div className='flex items-center w-[50%] gap-8'>
          <FaCircleArrowLeft className='text-3xl text-white hover:text-gray-400 cursor-pointer' />

          <AiFillHome className='text-3xl text-white hover:text-gray-400 cursor-pointer' />
        </div>

        <div className='flex items-center justify-end  w-[50%] gap-8'>
          <img className='w-10 h-10 rounded-full' src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg" alt="logo" />
        </div>
      </nav>

      <div className='flex  flex-col lg:flex-row justify-between h-[calc(100vh-65px)]'>

        <div className='p-3 sm:p-0 w-full lg:w-[70%]  h-full flex flex-col items-center lg:items-end'>

          <div className='text-white mt-5  text-center sm:text-left sm:mt-10'>
            We compressed your file by <span className='font-bold text-white'>18%</span> . The file is now 1.48 MB 1.22 MB.
          </div>


          <video className='w-[95%] h-[80%] sm:w-[90%] sm:h-[70%] md:w-[75%] md:h-[60%] object-cover mt-5' src="/motion-tracking.mp4" autoPlay muted loop playsInline />


        </div>


        <div className=' w-full lg:w-[25%] h-full flex flex-col items-center lg:items-start '>

          <p className='text-[#c5c5c6] font-bold mt-5 sm:mt-0  lg:mt-20'>Compress Video</p>
          <button className='bg-[#0080ff] text-white px-4 py-2   rounded-sm flex items-center gap-2 mt-5'> <RiDownloadLine className='text-xl' /> Download</button> <br></br>

          <button className='bg-red-500 text-white px-4 py-3  rounded-sm flex items-center gap-2 '> <CgCompressV className='text-xl' /> Compress another Video</button>
        </div>
      </div>
    </section>
  )
}

export default DownloadFile
