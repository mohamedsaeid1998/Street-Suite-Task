import { FaBell, FaSearch } from "react-icons/fa";
interface IProps {
  handleSearch:(e: React.ChangeEvent<HTMLInputElement>) => void
  searchValue:string
}
const Header = ({handleSearch,searchValue}:IProps) => {
  return <>
    <header className=' flex items-center'>
      <h1 className=' text-lg xs:text-2xl sm:text-5xl font-bold sm:border-l-4 border-activeColor sm:pl-3  rounded-tl-sm  mr-2 xs:mr-0 rounded-bl-sm'>ALERTS</h1>
      <div className="flex items-center p-1.5 rounded-md  sm:ml-6 mr-4 sm:px-3 bg-[#313131] flex-1 ">
        <input onChange={handleSearch} value={searchValue} type="search" className="outline-none flex-1 border-none mr-2  bg-transparent pl-1 text-white caret-activeColor placeholder-white " placeholder='Search by Name'  />
        <FaSearch color="#6B6B6B" size={18} className="cursor-pointer me-auto" />
      </div>
      <div className='relative hidden md:block'>
            <FaBell size={28} color='#53ACFF'/>
            <span className=" bg-greenColor rounded-full absolute top-0 left-4 w-3 h-3 text-[10px] flex justify-center items-center">6</span>
          </div>
    </header>

  </>
}

export default Header