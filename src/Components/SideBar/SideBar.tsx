import { profileImg, streetSuiteLogo } from '@/Assets'
import { Link } from 'react-router-dom'
import { FaArrowUpRightDots, FaBell, FaFolderOpen, FaGears, FaGraduationCap } from "react-icons/fa6";

interface IProps {
  toggle: boolean
  setToggle: React.Dispatch<React.SetStateAction<boolean>>
}

const SideBar = ({ setToggle, toggle }: IProps) => {

  const navItems = [
    { icon: <FaGears size={20} />, title: "Automation" },
    { icon: <FaFolderOpen size={20} />, title: "Portfolio" },
    { icon: <FaArrowUpRightDots size={20} />, title: "Trading" },
  ]

  return <>

    <aside className={`bg-mainBg flex flex-col ${toggle ? "max-w-[180px]" : "max-w-[70px]"}  p-2 pt-4 h-screen duration-500`}>
      <figure className=' flex justify-center mb-12'>
        <img onClick={() => setToggle(!toggle)} className='min-w-10' src={streetSuiteLogo} alt="Logo" />
      </figure>

      <div className='flex flex-col justify-between h-full'>
        <nav className='text-white'>
          <ul className='flex flex-col justify-center gap-3'>
            <li>
              <Link className={`flex items-center ${toggle ? "" : "justify-center"} gap-2 hover:text-activeColor duration-300`} to={'./'}> <span><FaBell size={20} /></span> <span className={`font-semibold text-lg ${toggle ? "" : "hidden"}`}>Alerts</span></Link>
            </li>
            <li>
              <Link className={`flex items-center ${toggle ? "" : "justify-center "} gap-2 hover:text-activeColor duration-300`} to={'./'}> <span><FaGraduationCap size={20} /></span> <span className={`font-semibold text-lg ${toggle ? "" : "hidden"}`}>Training</span></Link>
            </li>
            {navItems?.map(({ icon, title }) => <li key={title} className='text-white text-opacity-30'>
              <Link className={`flex items-center ${toggle ? "" : "justify-center "} gap-2 `} to={'./'}> <span className=''>{icon}</span> <span className={`font-semibold text-lg ${toggle ? "" : "hidden"}`}>{title}</span></Link>
            </li>)}
          </ul>
        </nav>

        <div className='flex flex-col items-center gap-4'>

          <div className='flex gap-4 '>
            <img src={profileImg} alt="profile-Img" />
            <div className={`flex flex-col ${toggle ? "" : "hidden"} `}>
              <span className='text-white text-[15px] text-nowrap font-semibold'>Moni Roy</span>
              <span className='text-[#979797] text-[13px] font-semibold'>Beginner</span>
            </div>
          </div>

          <span className={`text-[#424242] text-sm ${toggle ? "" : "hidden"}`}>Street Suite. 2.0</span>
        </div>


      </div>


    </aside>
  </>
}

export default SideBar