import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'
import Filtration from '../../Pages/Filtration/Filtration'

const AuthLayout = () => {

  return <>
    <div className='flex w-screen'>
      <SideBar  />
      <Outlet />
    </div>

  </>
}

export default AuthLayout