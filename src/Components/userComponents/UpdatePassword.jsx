import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut, updatePassword, updateProfile } from "firebase/auth";
import { __AUTH } from "../../backend/firebase";
import toast from "react-hot-toast";
import Spinner from "../../utilities/Spinner";
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
import { AuthContextAPI } from '../../context/AuthContext';
let  UpdatePassword=()=>{
  let {authUser,setAuthuser}=useContext(AuthContextAPI);
  let [isLoading,setIsLoading]=useState(false);
  let navigate=useNavigate();

  let intialState={
    newPassword:"",
    ConfirmNewPassword:"",
  }

  let [passwordData,setPasswordData]=useState(intialState)

  let handleInputChange=(e)=>{
    let {name,value}=e.target;
    setPasswordData({
      ...passwordData,[name]:value
    })
  };


  let { newPassword,confirmNewPassword}=passwordData;

  let handleSubmit = async  (e)=>{
    e.preventDefault();

   try {
    setIsLoading(true)
   
    if (newPassword==confirmNewPassword){
      await updatePassword(authUser,newPassword)
      toast.success("Password Changed Successfully")
      signOut(__AUTH);
      setAuthuser(null);
      navigate("/login");
    }else{
      toast.error("New password should match with Confirm password")
    }

   } catch (error) {
    toast.error(error.message)
    console.log(error);
    
   }
    
  }


    return <section className="h-[calc(100vh-70px)] w-[100%] flex justify-center items-center">
    <article className="w-[27%] bg-slate-700 py-4 px-6 rounded-md ">
        <header>
                <h1 className="text-center text-[24px] font-semibold">Update Password</h1>
            </header>
            <main>
                <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                
                <div>
                        <label htmlFor="newPassword" className="block py-1">New Password</label>
                        <input type="Password" name="newPassword" onChange={handleInputChange} required value={newPassword}className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your new password" />
                    </div>
                    <div>
                        <label htmlFor="confirmNewPassword" className="block py-1">Confirm Password</label>
                        <input type="Password" name="confirmNewPassword" onChange={handleInputChange} required value={confirmNewPassword}className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your confirm password" />
                    </div>
                 
                
                    <div className="mt-3">
                        <button className=" bg-blue-600 w-[100%] rounded-md cursor-pointer hover:bg-blue-800 p-2 ">Submit</button>
                    </div>

                  
          
        </form>
            </main>
        </article>
        {isLoading && <Spinner/>}
    </section>
}
export default UpdatePassword