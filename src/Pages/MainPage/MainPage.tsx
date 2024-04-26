import { Header, MarketDetails } from '@/Components';
import CircularNav from '@/Components/CircularNav/CircularNav';
import { useMarketListQuery } from '@/Redux/Services/Market/MarketSlice';
import { useState } from 'react';
import { BsGearFill } from 'react-icons/bs';
import Filtration from '../Filtration/Filtration';
import { FiltrationModel } from './MainPageModels';

const MainPage = () => {


  //? ***************Get Market Data ***************
  const { data: marketData } = useMarketListQuery(0)


  //! *************** Header Search Input ***************
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  };


  //TODO *************** Reset Market Data ***************
  const clearAllFilteredItems = () => {
    document.querySelectorAll<HTMLInputElement>('input[type="checkbox"].hidden:checked').forEach(checkbox => {
      checkbox.checked = false;
    })
    setFilteredItems([]);
    setFilterData(marketData)
  };
  const [filterData, setFilterData] = useState([])
  const [formData, setFormData] = useState({
    asset: "options",
    filteredItems: [],
    risk: "Mid Risk",
    strategy: "merger",
    market: "small"
  })
  const [filteredItems, setFilteredItems] = useState<string[]>([])

  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const closeModal = () => {
    setIsOpen(false)
  }
  return <>

    <CircularNav />
    <main className='p-4 flex-1 text-white'>
      <FiltrationModel {... { isOpen, closeModal ,filteredItems, setFilteredItems, setFormData, clearAllFilteredItems }} />


      <div onClick={openModal} className=' gear  fixed top-[50%] w-10 h-10 flex items-center justify-center right-0 bg-activeColor  '><span className='animate-spin'><BsGearFill size={20} /></span></div>
      <Header {...{ handleSearch, searchValue }} />
      <MarketDetails {...{ searchValue, formData, clearAllFilteredItems, setFilterData, filterData, marketData }} />
    </main>
    <Filtration {...{ filteredItems, setFilteredItems, setFormData, clearAllFilteredItems }} />
  </>
}

export default MainPage
