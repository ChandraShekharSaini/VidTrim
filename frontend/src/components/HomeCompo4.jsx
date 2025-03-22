import React from 'react'

const HomeCompo4 = () => {
    return (
        <section className='w-full  p-8 sm:p-0 sm:h-[110vh] bg-white flex flex-col text-center items-center justify-center gap-5'>

            <p className=' text-[20px] sm:text-[23px] font-extrabold'>Reduce video size</p>

            <p className='font-light font-Oswald  text-gray-950 tracking-wider text-[18px] sm:text-[23px]'>Try our online video compressor to reduce video file size</p>

            <div className='shadow-lg shadow-gray-400 rounded-lg p-4 sm:p-7'>
                <video className='w-full h-full object-cover' src="https://static.clideo.com/media/compress-video.superb.av1.mp4" autoPlay muted loop playsInline />
            </div>





        </section>
    )
}

export default HomeCompo4
