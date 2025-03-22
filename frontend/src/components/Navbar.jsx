import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from '../compostyles/navbar.module.css'
import { FaList } from "react-icons/fa6";
import logoVideo from '../assets/logo-black.mp4'


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const getScrollThreshold = () => {
            const width = window.innerWidth;


            if (width >= 1500) { // lg screens
                return 2628;
            }


            else if (width >= 1496) { // lg screens
                return 2640;
            }

            else if (width >= 1400) { // md screens
                return 2731;
            }

            else if (width >= 1300) { // md screens
                return 3731;
            }


            else if (width >= 768) { // md screens
                return 3731;
            } else if (width >= 640) { // sm screens
                return 3690;
            }

            else if (width >= 550) { // mobile screens
                return 3216;
            }

            else if (width >= 500) { // mobile screens
                return 3284;
            }


            else if (width >= 455) { // mobile screens
                return 3295;
            }

            else if (width >= 450) { // mobile screens
                return 3312;
            }

            else if (width >= 420) { // md screens
                return 3350;
            }

            else if (width >= 400) { // mobile screens
                return 3400;
            }

            else if (width >= 375) { // mobile screens
                return 3500;
            }


        };

        const handleScroll = () => {
            const threshold = getScrollThreshold();
            console.log(window.scrollY)
            if (window.scrollY > threshold) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        // Initial check
        handleScroll();

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Add resize event listener to update threshold when screen size changes
        window.addEventListener('resize', handleScroll);

        // Cleanup event listeners on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);






    return (

        <nav className={`text-white w-[95%] mx-auto pr-3 sm:pr-0 flex justify-between rounded-2xl fixed top-4 left-0 right-0 z-10 mt-4 transition duration-500 backdrop-blur-sm ${isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-black'
            }`}>

            <div className='sm:w-[50%] lg:w-[30%]  rounded-full flex  items-center justify-start gap-4 pl-4 '>
                {/* <img className='w-12  h-12' src="/logoVideo.webp" /> */}

                <video
                    className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover  hover:scale-125 transition duration-500"
                    loop
                    autoPlay
                    muted
                    playsInline
                    src="/logo-black.mp4"
                />
                <p className={`font-mono font-bold text-2xl sm:text-3xl  md:text-4xl border-2 border-gray-500 rounded-sm  px-2 py-1 sm:px-4 sm:py-2 ${isScrolled ? 'text-orange-500' : 'text-white'
                    }`}>VidTrim</p>

            </div>

            <div className={`font-semibold font-mono  lg:w-[60%] hidden lg:flex items-center  gap-10 ${isScrolled
                ? 'text-black'
                : 'text-[#cecece]'
                }`}>
                <Link className={`transition duration-400 ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'
                    }`} to="/">
                    HOME
                </Link>

                <Link className={`transition duration-400 ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'
                    }`} to="/video-upload">
                    VIDEO COMPRESSION
                </Link>

                <Link className={`transition duration-400 ${isScrolled ? 'hover:text-orange-500' : 'hover:text-white'
                    }`} to="/about" >
                    ABOUT US
                </Link>

            </div>

            <div className=' font-mono sm:w-[50%] lg:w-[25%] flex items-center justify-center gap-2 sm:gap-5'>


                <Link to="/create-account/sign-in" >
                    <button className={`min-mobile:hidden  max-mobile:block   px-2  sm:px-4 py-2 border-[1px] border-gray-500 rounded-md transition duration-500 ${isScrolled ? 'text-black hover:shadow-md shadow-black' : 'hover:border-gray-400 hover:shadow-md '}`} >
                        SIGN IN
                    </button>
                </Link>

                <Link to="/create-account/sign-up" >
                    <button className={`hidden md:block px-4 py-2 rounded-md  transition duration-500 ${isScrolled ? 'bg-black text-white hover:bg-orange-500' : ' bg-white text-black hover:bg-[#cdcdcd]'}`}>
                        SIGN UP
                    </button>
                </Link>



                <Link to="/" className='md:hidden' >

                    <FaList className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />

                </Link>

            </div>


        </nav >


    )
}

export default Navbar