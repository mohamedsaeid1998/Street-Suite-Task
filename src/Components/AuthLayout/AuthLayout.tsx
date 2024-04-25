import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Filtration from '../../Pages/Filtration/Filtration'

const AuthLayout = () => {

  const [toggle, setToggle] = useState(true)
  return <>
    <div className='flex w-screen'>
      <SideBar {...{ toggle, setToggle }} />
      <main className='p-4 flex-1 text-white'>
        <Outlet />
      </main>

      <Filtration />
    </div>

  </>
}

export default AuthLayout