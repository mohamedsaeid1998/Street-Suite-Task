import { Outlet } from 'react-router-dom'
import SideBar from '../SideBar/SideBar'

const AuthLayout = () => {

  return <>

    <div className='flex w-screen'>
      <SideBar />
      <Outlet />
    </div>

  </>
}

export default AuthLayout