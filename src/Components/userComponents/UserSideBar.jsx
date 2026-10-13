import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdAccountBalanceWallet } from "react-icons/md";
import { ImProfile } from 'react-icons/im';
import { IoMdPersonAdd } from 'react-icons/io';
import { TbLockPassword } from 'react-icons/tb';
import { AiFillDelete } from 'react-icons/ai';

const UserSideBar = () => {
  return (
    <section className='p-7'>
      <article>
        <ul className='flex flex-col gap-4'>
            <li>
                <NavLink end to={"/user-profile"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><MdAccountBalanceWallet /></span><span>My account</span></NavLink></li>
                <li>
                <NavLink to={"update-profile"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><ImProfile /></span><span>Update Profile</span></NavLink></li>
                <li>
                <NavLink to={"add-profile"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><IoMdPersonAdd /></span><span>Add Profile</span></NavLink></li>
                <li>
                <NavLink to={"update-password"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><TbLockPassword /></span><span>Update Password</span></NavLink></li>
                <li>
                <NavLink to={"delete-account"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><AiFillDelete /></span><span>Delete Account</span></NavLink></li>
        </ul>
      </article>
    </section>
  )
}

export default UserSideBar
