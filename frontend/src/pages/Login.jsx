import React from 'react'
import { Link } from 'react-router-dom'
import userAuth from '../customhooks/userAuth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart, signInSuccess, signInFailure } from '../redux/userSlice'

const Login = () => {

    const { GoogleAuthButton, GithubAuthButton } = userAuth()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()
    const { currentUser } = useSelector((state) => state.user)

    console.log(currentUser)

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    console.log(formData)


    const handleSignup = async (e) => {

        e.preventDefault()

        try {
            dispatch(signInStart())
            const response = await fetch("https://vimtrim.onrender.com/api/auth/sign-in", {
                headers: {
                    "Content-Type": "application/json",

                },
                credentials: "include",
                method: "POST",
                body: JSON.stringify(formData)
            })


            const data = await response.json()
            console.log(data)

            if (data.success === false) {
                dispatch(signInFailure(data.message))
            }


            dispatch(signInSuccess(data.user))

            setTimeout(() => {
                navigate("/")
            }, 1500)
        } catch (error) {
            dispatch(signInFailure(error.message))
            console.log(error)
        }
    }


    return (
        <section className='bg-black flex flex-col justify-center  items-center h-screen w-screen pr-1 pl-1 sm:pr-0 sm:pl-0 '>

            <div className='text-[#eeeeee] font-bold text-2xl mb-6'>Sign in</div>


            <form onSubmit={handleSignup} className='flex flex-col  gap-4 border-[2px] p-10  bg-[#191919] w-[450px] max-w-[90%]  max-h-[90%] rounded-lg'>


                <p className='text-[#d5d3d3] font-semibold'>Email</p>
                <input type="email" placeholder='Your email address' name='email' onChange={handleChange} autocomplete="on" className='bg-transparent border-[2px] border-gray-300   rounded-[5px] outline-none text-[#eeeeee] focus:border-[2px] focus:border-[#6255ae] p-2' />


                <p className='text-[#d5d3d3] font-semibold'>Password</p>
                <input type="password" placeholder='Your password' name='password' onChange={handleChange} autocomplete="on" className='bg-transparent border-[2px] border-gray-300   rounded-[5px] outline-none text-[#eeeeee] focus:border-[2px] focus:border-[#6255ae] p-2' />

                <button type='submit' className='bg-[#f6f6f6] p-2  font-semibold rounded-[5px] '>Continue</button>


                <div className=' flex justify-center items-center w-full mt-3'>
                    <hr className='flex-1 h-1 border-gray-300' />
                    <div className='mx-2 text-[#a4a4a4] text-[12px] font-semibold'>OR</div>
                    <hr className=' flex-1 h-1 border-gray-300' />
                </div>



                <button onClick={GoogleAuthButton} className='p-2   bg-[#181818] border-[1px] text-[#cfcfcf] border-gray-400  mt-3 hover:border-gray-500 font-semibold rounded-[5px] flex justify-center items-center gap-2 cursor-pointer'> <img src="/google.svg" className='w-4 h-4 mr-2' /> Continue with Google</button>

                <button onClick={GithubAuthButton} className='p-2   bg-[#181818] border-[1px] text-[#cfcfcf] border-gray-400  hover:border-gray-500 font-semibold rounded-[5px] flex justify-center items-center gap-2 cursor-pointer'> <img src="/githublogo.png" className='w-5 h-5 mr-2' /> Continue with Github</button>


                <div className=' flex justify-center text-center items-center pt-4'>
                    <div className='text-[#a4a4a4]'>Don’t have an account? <Link to='/create-account/sign-up' className='text-[#6255ae] hover:underline transition-all duration-300 cursor-pointer'>Sign up</Link></div>
                </div>
            </form>


            <div className='text-[#9e9e9e] text-[16px] mt-10 cursor-pointer hover:underline  '>Terms of Service and Privacy Policy</div>
        </section>
    )
}

export default Login
