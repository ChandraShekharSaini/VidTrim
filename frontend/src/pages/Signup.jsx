import React ,{ useState }from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import userAuth from '../customhooks/userAuth'

const Signup = () => {

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const { GoogleAuthButton, GithubAuthButton } = userAuth()


    const handleChange = (e) => {
         console.log(e.target.value)
        setFormData({...formData, [e.target.name]: e.target.value})
    }



    const handleSignup = async (e) => {

        e.preventDefault()

        try {
            const response = await fetch("https://vimtrim.onrender.com/api/auth/sign-up", {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(formData)
            })

            const data = await response.json()
            console.log(data)

            navigate("/create-account/sign-in")
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <section className='bg-black flex flex-col justify-center  items-center  h-[110vh]   sm:h-[105vh]  w-screen pr-2 pl-2  sm:pr-0 sm:pl-0 '>

            <div className='text-[#eeeeee] font-bold text-2xl mb-6'>Sign up</div>


            <form onSubmit={handleSignup} className='flex flex-col  gap-4 border-[2px] p-12    bg-[#191919] w-[450px] max-w-[90%]  max-h-[90%] rounded-lg'>

                {/* klkjkj */}

            

                    <div className='flex flex-row gap-4   justify-between'>
                        <div className='flex flex-col gap-2 w-[45%]' >
                            <p className='text-[#d5d3d3] font-semibold'>First name</p>
                            <input type="text" placeholder='Your first name' name='firstName' onChange={handleChange}  autoComplete='on' className='bg-[#131313]  border-[2px] border-gray-300   rounded-[5px] outline-none text-[#eeeeee] focus:border-[2px] focus:border-[#6255ae] focus:bg-[#272635]  p-2' />
                        </div>


                        <div className='flex flex-col gap-2 w-[45%]'>
                            <p className='text-[#d5d3d3] font-semibold'>Last name</p>
                            <input type="text" placeholder='Your last name' name='lastName' onChange={handleChange} autoComplete='on' className='bg-[#131313]  border-[2px] border-gray-300   rounded-[5px] outline-none text-[#eeeeee] focus:border-[2px] focus:border-[#6255ae] focus:bg-[#272635]  p-2' />
                        </div>
                    </div>


                    <p className='text-[#d5d3d3] font-semibold'>Email</p>
                    <input type="email" placeholder='Your email address' name='email' onChange={handleChange}  autocomplete="on" className='bg-[#131313]  border-[2px] border-gray-300   rounded-[5px] outline-none text-[#eeeeee] focus:border-[2px] focus:border-[#6255ae] focus:bg-[#272635]  p-2' />

                    <button type='submit' className='bg-[#f6f6f6] p-2  font-semibold rounded-[5px] '>Continue</button>
        


                <div className=' flex justify-center items-center w-full mt-3'>
                    <hr className='flex-1 h-1 border-gray-300' />
                    <div className='mx-2 text-[#a4a4a4] text-[12px] font-semibold'>OR</div>
                    <hr className=' flex-1 h-1 border-gray-300' />
                </div>



                <button onClick={GoogleAuthButton} className='p-2   bg-[#181818] border-[1px] text-[#cfcfcf] border-gray-400  mt-3 hover:border-gray-500 font-semibold rounded-[5px] flex justify-center items-center gap-2 cursor-pointer'> <img src="/google.svg" className='w-4 h-4 mr-2' /> Continue with Google</button>

                <button onClick={GithubAuthButton} className='p-2   bg-[#181818] border-[1px] text-[#cfcfcf] border-gray-400  hover:border-gray-500 font-semibold rounded-[5px] flex justify-center items-center gap-2 cursor-pointer'> <img src="/githublogo.png" className='w-5 h-5 mr-2' /> Continue with Github</button>


                <div className=' flex justify-center text-center items-center pt-4'>
                    <div className='text-[#a4a4a4]'>Already have an account?  <Link to='/create-account/sign-in' className='text-[#6255ae] hover:underline transition-all duration-300 cursor-pointer'>Sign in</Link></div>
                </div>


            </form>


            <div className='text-[#9e9e9e] text-[16px] mt-10 cursor-pointer hover:underline  '>Terms of Service and Privacy Policy</div>
        </section>
    )
}

export default Signup
