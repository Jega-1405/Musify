import { NavLink, useNavigate } from "react-router-dom"
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { __AUTH } from "../../backend/firebase";
import toast from "react-hot-toast";
import Spinner from "../../utilities/Spinner";
let Register=()=>{
  let [isLoading,setIsLoading]=useState(false);
  let Navigate=useNavigate()
    let [passwordEye , setPasswordEye] = useState(false);
    let [confirmPasswordEye , setconfirmPasswordEye] = useState(false);
    let iniitialUserData = {
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    }
    let [userData , setUserData] = useState(iniitialUserData);
    let {username,email,password,confirmpassword}=userData;
    let handleInputChange = (e)=>{
        let {name,value} = e.target;
        // console.log(name,value);
        setUserData({
            ...userData , [name]:value
        })
        
    }
    let handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(userData);

        if(password==confirmpassword){
          setIsLoading(true)
        try{
        let RegisterData=await
        createUserWithEmailAndPassword( __AUTH,email,password)
        toast.success("user Registered Successfully")
        await sendEmailVerification(RegisterData.user)
        toast.success(`Email verification link has been sent to ${email}`);
        updateProfile(RegisterData.user,{
          displayName:username,
          photoURL:"https://i.ibb.co/fdjdkDLz/user-White.png"
        })
        Navigate("/login")
        setUserData(iniitialUserData)
        console.log(RegisterData);
       
        
        }catch(error){
         toast.error(error.message)
        }finally{
          setIsLoading(false)
        }

      }else{
        toast.error("Password Mismatch")
      }
   
  }

    return <section className="h-[calc(100vh-70px)] w-[100%] flex justify-center items-center">
    <article className="w-[27%] bg-slate-700 py-4 px-6 rounded-md ">
        <header>
                <h1 className="text-center text-[24px] font-semibold">Register</h1>
            </header>
            <main>
                <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block py-1">Name</label>
        <input type="text" name="username" onChange={handleInputChange} required value={username} className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your Name" />
            </div>
                    <div>
                        <label htmlFor="email" className="block py-1">E-mail</label>
                        <input type="email" name="email" onChange={handleInputChange} required value={email}className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your Email id" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block py-1">Password</label>
                        <input type={passwordEye?"text":"password"}name="password" value={password}onChange={handleInputChange} required className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your Password" />
                        <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute right-[12px] top-[35px] text-[20px]"> { passwordEye? <IoIosEyeOff />:<IoMdEye />}</span>
                    </div>
                    <div className="relative">
                 <label htmlFor="confirmpassword" className="block py-1">Confirm Password</label>
                        <input type={confirmPasswordEye?"text":"password"} name="confirmpassword" onChange={handleInputChange} value={confirmpassword} required className="outline-none border-1 w-[100%] rounded-md pl-1.5 " placeholder="Enter Your Confirm password" />
                        <span onClick={()=>setconfirmPasswordEye(!confirmPasswordEye)} className="absolute right-[12px] top-[35px] text-[20px]"> { confirmPasswordEye? <IoIosEyeOff />:<IoMdEye />}</span>
                    </div>
                    <div className="mt-3">
                        <button className=" bg-blue-600 w-[100%] rounded-md cursor-pointer hover:bg-blue-800 p-2 ">Register</button>
                    </div>
                    <div className="flex justify-center">
                        <NavLink to={"/login"}>Already have an account?</NavLink>
             </div>
        </form>
            </main>
        </article>
        {isLoading && <Spinner/>}
    </section>
}
export default Register
