import React from 'react'
import { FaBell } from "react-icons/fa";
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return <>
    <header className=' flex items-center'>
      <h1 className='text-5xl font-bold border-l-4 border-activeColor pl-3 rounded-tl-sm  rounded-bl-sm'>ALERTS</h1>
      <div className="flex items-center p-1.5 rounded-md   ml-6 mr-4 px-3 bg-[#313131] flex-1 ">
        <input type="search" className="outline-none flex-1 border-none mr-2  bg-transparent pl-1 text-[#737373] caret-activeColor placeholder-white " placeholder='Search by...' />
        <FaSearch color="#6B6B6B" size={18} className="cursor-pointer me-auto" />
      </div>
      <div className='relative'>
            <FaBell size={28} color='#53ACFF'/>
            <span className=" bg-greenColor rounded-full absolute top-0 left-4 w-3 h-3 text-[10px] flex justify-center items-center">6</span>
          </div>
    </header>

  </>
}

export default Header