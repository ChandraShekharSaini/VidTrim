import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import { BsSendDashFill } from "react-icons/bs";
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { signOutUserStart, signOutUserSuccess, signOutUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, updateUserStart, updateUserSuccess, updateUserFailure } from '../redux/userSlice'
import { Link } from 'react-router-dom';
import { useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';





export default function FormPropsTextFields() {
    const { currentUser } = useSelector((state) => state.user);

    console.log(currentUser)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isUpdated, setIsUpdated] = useState(false)

    const [formData, setformData] = React.useState({
        firstName: currentUser?.firstName || '',
        lastName: currentUser?.lastName || '',
        username: currentUser?.username || '',
        email: currentUser?.email || '',
        password: '',

    })




    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };




    const handleLogout = async () => {

        try {
            dispatch(signOutUserStart())
            const response = await fetch(`http://localhost:3600/api/auth/sign-out/${currentUser._id}`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                }
            )
            console.log(response)
            const data = await response.json();
            console.log(data)
            if (data.success === false) {

                console.log(error)
                dispatch(signOutUserFailure(error.message))
                return
            }

            dispatch(signOutUserSuccess(data))
            navigate('/')


        } catch (error) {
            dispatch(signOutUserFailure(error.message))
            console.log(error.message)
        }
    }




    const handleDelete = async () => {

        try {
            dispatch(deleteUserStart())
            const response = await fetch(`http://localhost:3600/api/auth/delete-user/${currentUser._id}`,
                {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                }
            )

            const data = await response.json();
            console.log(data)
            if (data.success === false) {

                console.log(error)
                dispatch(deleteUserFailure(error.message))
                return
            }

            dispatch(deleteUserSuccess(data))
            navigate('/')


        } catch (error) {
            dispatch(deleteUserFailure(error.message))
            console.log(error.message)
        }
    }



    const handleChange = (e) => {
        console.log(e.target.id)
        console.log("I am here")
        setformData({ ...formData, [e.target.id]: e.target.value })
        console.log(formData)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()



        try {
            dispatch(updateUserStart())
            const response = await fetch(`http://localhost:3600/api/auth/update-user/${currentUser._id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                }
            )


            const data = await response.json()
            console.log(data)
            if (data.success === false) {
                dispatch(updateUserFailure(data.message))
                console.log(data)
            }
            setIsUpdated(true)
            handleClick()
            dispatch(updateUserSuccess(data.user))


        } catch (error) {
            console.log(error.message)
            dispatch(updateUserFailure(error.message))
        }

    }



    return (
        <>
            {
                isUpdated && (
                    <div>

                        <Snackbar open={open} className='text-center' autoHideDuration={6000} onClose={handleClose}>
                            <Alert
                                onClose={handleClose}
                                severity="success"
                                variant="filled"
                                sx={{ width: '100%' }}
                            >
                                Updated user details successfully   
                                
                            </Alert>
                        </Snackbar>
                    </div>

                )
            }




            <div className="w-full h-screen grid grid-cols-10 bg-white">

                <div className="flex flex-col gap-1 h-screen  col-span-2">

                    <div className='flex flex-col gap-4  p-2 '>
                        <div className='flex flex-row items-center gap-4'>
                            <img src={currentUser.profilePicture.defaultImageUrl} alt="userImage" className="w-14 h-14 rounded-full" />
                            <div className='flex flex-col gap-2'>
                                <h1 className='text-lg  font-Karma font-medium '>{currentUser.username}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='h-[30%] border-[1px]  flex flex-col gap-4 border-purple-600 '>


                        <Link to='/user/dashboard' className='flex flex-row items-center gap-4 border-[2px] border-yellow-400 p-2 cursor-pointer '>

                            <div className='bg-blue-600  w-9 h-9 flex  justify-center  items-center rounded-full p-2'>


                                <BsSendDashFill className='text-white' />



                            </div>
                            <div>
                                <p className='font-mono'>Dashboard</p>
                            </div>


                        </Link>


                        <Link to='/' className='flex flex-row  items-center  gap-4 border-[2px] border-red-900 p-2 cursor-pointer '>
                            <div className='bg-orange-600  w-9 h-9 flex  justify-center  items-center rounded-full p-2'>
                                <HomeIcon className='text-white' />
                            </div>
                            <div>
                                <p className='font-mono'>Home</p>
                            </div>

                        </Link>

                    </div>


                    <div className='h-[50%] flex flex-col  justify-end gap-4 border-[2px] '>

                        <div className='flex flex-row items-center gap-4 border-[2px] border-red-900 p-2 cursor-pointer '>
                            <div className='bg-purple-600  w-9 h-9 flex  justify-center  items-center rounded-full p-2'>
                                <EmailIcon className='text-white' />
                            </div>
                            <div>
                                <p className='font-mono'>Contact Us</p>
                            </div>

                        </div>




                        <div className='flex flex-row gap-4  border-[2px] border-red-900   p-2 '>

                            <button onClick={handleLogout} className=' text-white bg-blue-500 hover:bg-[#3065d8] p-2 rounded-md'>
                                <LogoutIcon /> Logout
                            </button>

                        </div>


                        <div className='flex flex-row gap-4  border-[2px] border-red-900   p-2 '>

                            <button onClick={handleDelete} className=' text-white bg-red-600 hover:bg-[#ec090a] p-2 rounded-md'>
                                <DeleteIcon /> Delete Account
                            </button>

                        </div>

                    </div>
                </div>




                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '32ch' } }}
                    noValidate
                    autoComplete="off"
                    className="h-screen col-span-6 bg-[#151519] p-10"
                >

                    <div>
                        <BsFillArrowLeftCircleFill onClick={() => navigate(-1)} className='text-[30px] text-white hover:text-gray-500' />
                    </div>

                    <div className=' grid place-content-center'>
                        <img
                            src={currentUser.profilePicture.defaultImageUrl}
                            alt="userImage"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>

                    <div className="flex flex-col gap-8 p-4 mx-auto mt-8">
                        <div className='w-[90%]  flex flex-row justify-between gap-4'>
                            <TextField
                                id="firstName"
                                label="First Name"
                                name='firstName'
                                onChange={handleChange}
                                defaultValue={formData.firstName}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: 'white' }
                                    }
                                }}
                            />

                            <TextField
                                id="lastName"
                                label="Last Name"
                                onChange={handleChange}
                                defaultValue={formData.lastName}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: 'white' }
                                    }
                                }}
                            />
                        </div>


                        <div
                            className='w-[90%]  flex flex-row justify-between gap-4'
                        >
                            <TextField
                                id="username"
                                label="Username"
                                onChange={handleChange}
                                defaultValue={formData.username}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: '#e8f0fe' }
                                    }
                                }}
                            />

                            <TextField
                                id="email"
                                label="Email"
                                type="email"

                                defaultValue={formData.email}
                                autoComplete="email"
                                inputProps={{
                                    readOnly: true,
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        },
                                        '&.Mui-disabled': {
                                            '& input': { color: 'rgba(255, 255, 255, 0.7)' },
                                            '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' }
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: 'white' }
                                    }
                                }}
                            />

                        </div>

                        <div className='w-[90%]  flex flex-row justify-between gap-4'>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                onChange={handleChange}
                                autoComplete="current-password"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: 'white' }
                                    }
                                }}
                            />

                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                autoComplete="new-password"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '& input': { color: 'white' },
                                        '& fieldset': { borderColor: 'white' },
                                        '&:hover fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused fieldset': { borderColor: 'rgb(32, 156, 227)' },
                                        '&.Mui-focused': {
                                            backgroundColor: 'rgba(32, 156, 227, 0.1)'
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: 'white',
                                        '&.Mui-focused': { color: 'white' }
                                    }
                                }}
                            />
                        </div>
                    </div>

                    <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md'>Update</button>
                </Box>


                <div className="col-span-2 w-full h-full relative">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInlin
                    >
                        <source src="https://videos.pexels.com/video-files/5118513/5118513-uhd_1440_2560_25fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>




            </div>
        </>
    );
}
