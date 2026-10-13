import React from 'react'
import NavbarContainer from '../NavbarComponenets/NavbarContainer'
import UserSideBar from './UserSideBar'
import { Outlet } from 'react-router-dom'

const UserMainContainer = () => {
  return (
    <section className='bg-slate-900 min-h-[100vh] w-[100%]'>
      <header>
        <NavbarContainer/>
      </header>
      <main className='flex'>
        <aside className='h-[calc(100vh-71px)] w-[20%] bg-slate-700'><UserSideBar/></aside>
        <aside className='w-[84%] min-h-[clac(100vh-71px)]'><Outlet/></aside>
      </main>
    </section>
  )
}

export default UserMainContainer
