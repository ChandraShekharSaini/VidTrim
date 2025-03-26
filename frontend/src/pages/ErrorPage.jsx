import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const ErrorPage = () => {

    const navigate = useNavigate()


    return (
        <section className="bg-[url('/errorBackground.svg')]  sm:px-3 flex flex-col items-center gap-7 justify-center  bg-cover bg-center h-screen w-full bg-[#2a222b]"
        >
            <div className=' flex justify-center  rounded-lg'>
                <img src="404Animation.gif" className=' w-[90%]   sm:w-full    bg-transparent border-[1px] rounded-xl' />
            </div>


            <div className='flex flex-row gap-6'>
                <Link to='/'>
                    <button className='px-7 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm font-mono '>Home</button>
                </Link>

                <Link onClick={() => navigate(-1)}>

                    <button className='px-7 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm font-mono '>Go Back</button>
                </Link>

            </div>
        </section>
    )
}

export default ErrorPage
