import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} from "../redux/userSlice";

const authCustomhook = () => {

    const dispatch = useDispatch();
    const {currentUser} = useSelector((state)=>state.user)
    const navigate = useNavigate()


  const handleLogout = async () => {

    console.log("logout logout");

   
    try {

        console.log("tryyy");
      dispatch(signOutUserStart());
      const response = await fetch(
        `https://vidtrim-backend-vercel.vercel.app/api/auth/sign-out/${currentUser._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      console.log(response);
      const data = await response.json();
      console.log("datata",data);
      if (data.success === false) {
        console.log(error);
        dispatch(signOutUserFailure(error.message));
        return;
      }

      dispatch(signOutUserSuccess(data));

  
        navigate("/");
 
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      dispatch(deleteUserStart());
      const response = await fetch(
        `https://vidtrim-backend-vercel.vercel.app/api/auth/delete-user/${currentUser._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();
      console.log(data);
      if (data.success === false) {
        console.log(error);
        dispatch(deleteUserFailure(error.message));
        return;
      }

      dispatch(deleteUserSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
      console.log(error.message);
    }
  };

  return { handleLogout, handleDelete };
};

export default authCustomhook;
