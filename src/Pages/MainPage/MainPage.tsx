import { Header, MarketDetails } from '@/Components'
import Filtration from '@/Pages/Filtration/Filtration'
import { useMarketListQuery } from '@/Redux/Services/Market/MarketSlice';
import { useState } from 'react'

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

  return <>
    <main className='p-4 flex-1 text-white'>
      <Header {...{ handleSearch, searchValue }} />
      <MarketDetails {...{ searchValue, formData, clearAllFilteredItems, setFilterData, filterData, marketData }} />
    </main>
    <Filtration {...{ filteredItems, setFilteredItems, setFormData, clearAllFilteredItems }} />
  </>
}

export default MainPage
