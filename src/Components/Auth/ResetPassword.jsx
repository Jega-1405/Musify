import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { __AUTH } from "../../backend/firebase";
import toast from "react-hot-toast";
import Spinner from "../../utilities/Spinner";
import { signInWithEmailAndPassword } from 'firebase/auth/web-extension';
let  ResetPassword=()=>{
  let [isLoading,setIsLoading]=useState(false);
  let navigate=useNavigate();

  let [email,setEmail] = useState("");

  let handleInputChange = (e)=>{
    setEmail(e.target.value)
  }

  let handleSubmit = async  (e)=>{
    e.preventDefault();

   try {
    setIsLoading(true)
    await sendPasswordResetEmail(__AUTH,email);

    toast.success(`Reset Link has been sent to ${email}`)
    setEmail("");
    setIsLoading(false);
    navigate("/login")

   } catch (error) {
    toast.error(error.message)
   }
    
  }


    return <section className="h-[calc(100vh-70px)] w-[100%] flex justify-center items-center">
    <article className="w-[27%] bg-slate-700 py-4 px-6 rounded-md ">
        <header>
                <h1 className="text-center text-[24px] font-semibold">Reset Password</h1>
            </header>
            <main>
                <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                
                    <div>
                        <label htmlFor="email" className="block py-1">E-mail</label>
                        <input type="email" name="email" onChange={handleInputChange} required value={email}className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your Email id" />
                    </div>
                 
                
                    <div className="mt-3">
                        <button className=" bg-blue-600 w-[100%] rounded-md cursor-pointer hover:bg-blue-800 p-2 ">Reset Password</button>
                    </div>

                    <div className="mt-3">
                 <NavLink to={"/login"}><button className=" bg-red-600 w-[100%] rounded-md cursor-pointer hover:bg-red-900 p-2 ">Cancel</button></NavLink>
                    </div>
          
        </form>
            </main>
        </article>
        {isLoading && <Spinner/>}
    </section>
}
export default ResetPassword


