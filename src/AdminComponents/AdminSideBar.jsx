import React from 'react'
import { NavLink } from 'react-router-dom'
import { RiDashboard3Fill } from "react-icons/ri";
// import { ImProfile } from 'react-icons/im';
import { IoMdPersonAdd } from 'react-icons/io';
import { TbLockPassword } from 'react-icons/tb';
// import { AiFillDelete } from 'react-icons/ai';
import { PiPlaylistFill } from "react-icons/pi";
import { LuAlbum } from "react-icons/lu";

const AdminSideBar = () => {
  return (
    <section className='p-7'>
      <article>
        <ul className='flex flex-col gap-4'>
            <li>
                <NavLink end to={"/admin"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><RiDashboard3Fill /></span><span>Dashboard</span></NavLink></li>
                <li>
                <NavLink to={"/admin/create-album"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><PiPlaylistFill /></span><span>Create Album</span></NavLink></li>
                <li>
                <NavLink to={"all-albums"} className={({isActive})=>`${isActive && "bg-blue-600"} flex items-center gap-2 px-3 py-1 rounded-md`}><span><LuAlbum /></span><span>All Album</span></NavLink></li>
        </ul>
      </article>
    </section>
  )
}

export default AdminSideBar;
