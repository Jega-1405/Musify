import React, { useContext } from 'react'
import { AuthContextAPI } from '../../context/AuthContext'
import { NavLink } from 'react-router-dom';
import { UserContextAPI } from '../../context/UserContext';
import { FaUserEdit } from "react-icons/fa";

const MyAccount = () => {
  let {authUser} = useContext(AuthContextAPI);
  let {userDataFromDB} = useContext(UserContextAPI);
  console.log(userDataFromDB);
  
  let data = useContext(UserContextAPI);
  console.log(data);
  
  return (
    <section className='h-[100%] w-[100%] flex items-center justify-center'>
        <article className='h-[420px] w-[50%] bg-slate-800 rounded-md'>
        <header className='h-[120px] w-[95%] mt-3 m-auto bg-slate-700 rounded-md relative'>
          <picture className='absolute top-[-55px] left-[245px]'>
            <img src={authUser?.photoURL} alt="" className='h-[100Px] w-[100px] rounded-full border' />
          </picture>
          <p className='flex flex-col gap-1 items-center pt-14'>
            <span>{authUser?.displayName}</span>
            <span>{authUser?.email}</span>
          </p>
        </header>
        <main>
          {userDataFromDB == null? <div className='h-full w-[100%]  flex flex-col items-center gap-2 border'>
            <picture>
              <img src="https://i.ibb.co/0j5wgtMv/person.png" className='h-[200px]' alt="" />
            </picture>
              <NavLink to={"/user-profile/add-profile"}>
                  <button className='bg-blue-600 py-2 px-10 rounded-md hover:bg-blue-800 cursor-pointer'>Add Profile</button>
              </NavLink>
            </div>:
            <section className='h-[290px] w-full py-2 px-4 '>
              <header className='flex items-center justify-between'><h1 className='text-[30px] font-semibold'>Personal Details</h1>
             <NavLink to={"/user-profile/add-profile"} state={userDataFromDB}> <span className=' text-[20px]'><FaUserEdit /></span></NavLink></header>
              <article className='flex gap-x-6 gap-y-4 mt-2 flex-wrap'>
                <div className='flex flex-col bg-slate-700 px-2 py-1 w-[46%] rounded-md'>
              <span className='text-[18px] font-semibold'>Dob:</span>
              <span>{userDataFromDB?.dob}</span></div>  <div className='flex flex-col bg-slate-700 px-2 py-1 w-[46%] rounded-md'>
              <span className='text-[18px] font-semibold'>Contact:</span>
              <span>{userDataFromDB?.contact}</span></div>
              <div className='flex flex-col bg-slate-700 px-2 py-1 w-[46%] rounded-md'>
              <span className='text-[18px] font-semibold'>Gender</span>
              <span>{userDataFromDB?.gender}</span></div>  <div className='flex flex-col bg-slate-700 px-2 py-1 w-[46%] rounded-md'>
              <span className='text-[18px] font-semibold'>Languages:</span>
              <span>{userDataFromDB?.languages}</span></div> 
               <div className='flex flex-col bg-slate-700 px-2 py-1 w-[95%] rounded-md'>
              <span className='text-[18px] font-semibold'>Address</span>
              <span>{userDataFromDB?.address}</span></div>
              </article>
            </section> }
        </main>
        </article>
      
    </section>
  )
}

export default MyAccount
