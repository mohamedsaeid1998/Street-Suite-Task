import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { TbHeartPlus } from "react-icons/tb";
import { BiRecycle } from "react-icons/bi";
import { SlEnergy } from "react-icons/sl";
import { ImCreditCard } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import { GiMechanicalArm } from "react-icons/gi";
import { PiChatsCircle } from "react-icons/pi";
import { FaIndustry } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { BsCoin } from "react-icons/bs";
import { Button } from '@/Components';
import { FaXmark as X } from "react-icons/fa6";

const Filtration = () => {

  const industryItems1 = [
    { icon: <TbHeartPlus size={15} />, title: "Health care" },
    { icon: <BiRecycle size={15} />, title: "Materials" },
    { icon: <SlEnergy size={15} rotate={180} />, title: "Energy" },
    { icon: <ImCreditCard size={15} />, title: "Consumer discretionary" },
    { icon: <AiOutlineShoppingCart size={15} />, title: "Consumer staples" },
    { icon: <HiOutlineHome size={15} />, title: "Real estate" },

  ]

  const industryItems2 = [
    { icon: <GiMechanicalArm size={15} />, title: "IT" },
    { icon: <PiChatsCircle size={15} />, title: "Communication" },
    { icon: <FaIndustry size={15} />, title: "Industrials" },
    { icon: <VscTools size={15} />, title: "Utilities" },
    { icon: <BsCoin size={15} />, title: "Financials" },
  ]

  const marketCap = [
    { title: "Micro" },
    { title: "Small" },
    { title: "Large" },
  ]

  const riskLevel = [
    { title: "Low Risk" },
    { title: "Mid Risk" },
    { title: "High Risk" },

  ]

  const [filteredItems, setFilteredItems] = useState<string[]>([])


  const handleFilteredItems = (title: string) => {
    if (filteredItems.includes(title)) {

      setFilteredItems(filteredItems.filter(item => item !== title));
    } else {
      setFilteredItems([...filteredItems, title]);

    };
  }

  const handleRemoveFilteredItems = (title: string) => {
    const newFilteredItems = filteredItems.filter(item => item !== title);
    document.getElementById(title)?.click();
    setFilteredItems(newFilteredItems);
  };

  console.log(filteredItems);
  const clearAllFilteredItems = () => {
    document.querySelectorAll<HTMLInputElement>('input[type="checkbox"].hidden:checked').forEach(checkbox => {
      checkbox.checked = false;
    })
    setFilteredItems([]);
  };
  return <>
    <section className='px-6 py-3 bg-mainBg  w-[420px] '>
      <div className='flex flex-col justify-center w-full '>

        <h2 className='font-bold text-2xl text-white m-auto mb-[6px]'>Filters</h2>
        <div className='flex justify-between items-center text-white'>
          <span className='text-[#979797] text-sm'>Filters Applied</span>
          <span onClick={clearAllFilteredItems} className='text-sm cursor-pointer'>Clear All</span>
        </div>

        <div className='p-1 bg-[#202020] rounded-md mt-1 min-h-[45px] flex flex-wrap gap-0.5'>
          {filteredItems.map((item) => <div className='bg-activeColor flex items-center px-1 rounded-md w-fit h-fit text-[10px] gap-0.5 mx-0.5'>{item} <span><X onClick={() => handleRemoveFilteredItems(item)} className='cursor-pointer' size={12} /> </span></div>)}
        </div>

        <div className='bg-[#202020] rounded-md mt-3 mb-2 px-5 pt-[10px]'>
          <h3 className='font-bold text-base text-white  mb-[6px]'>Stock</h3>

          <div className="flex items-center p-1.5 rounded-md  px-3 bg-[#313131] mb-[6px] ">
            <span className='inline-flex text-[#6B6B6B] text-sm'>$ TICKER</span>
            <input type="text" className="outline-none flex-1 border-none mr-2  bg-transparent pl-1 text-white" />
            <FaSearch color="#6B6B6B" size={14} className="cursor-pointer   me-auto" />
          </div>

          <details className='text-white flex'>
            <summary>Industry</summary>
            <div className='flex items-center ps-2'>

              <div className='flex flex-col border-l p-2 mt-1  w-[60%] '>
                {industryItems1.map(({ icon, title }) => <div key={title} className='p-1  '>
                  <input onClick={() => handleFilteredItems(title)} type="checkbox" id={title} name={title} value={title} className="hidden" />
                  <label className='flex items-center gap-2' htmlFor={title}><span>{icon}</span><span className='text-[10px]'>{title}</span> </label>
                </div>)}
              </div>

              <div className='flex flex-col border-l p-2 mt-1   mb-auto '>
                {industryItems2.map(({ icon, title }) => <div key={title} className='p-1  '>
                  <input onClick={() => handleFilteredItems(title)} type="checkbox" id={title} name={title} value={title} className="hidden" />
                  <label className='flex items-center gap-2' htmlFor={title}><span>{icon}</span><span className='text-[10px]'>{title}</span> </label>
                </div>)}
              </div>

            </div>

          </details>

          <div className='mt-3 flex items-center justify-between'>
            <details className='text-white flex'>
              <summary >Market Cap</summary>
              {marketCap.map(({ title }) => <div key={title} className='flex justify-center gap-2  items-center mt-1'>
                <input type="radio" id={title} name="market" value={title} />
                <label className='flex items-center gap-1' htmlFor={title}><span className='text-sm'>{title}</span></label>
              </div>)}


            </details>
            <details className='text-white flex'>
              <summary >Risk Level</summary>
              {riskLevel.map(({ title }) => <div key={title} className='flex justify-center gap-2 items-center mt-1'>
                <input type="radio" id={title} name="risk" value={title} />
                <label className='flex items-center gap-2' htmlFor={title}><span className='text-sm'>{title}</span></label>
              </div>)}


            </details>
          </div>


          <div className='my-3 flex items-center justify-between pe-4 '>

            <div className='flex flex-col items-center ps-2  text-white '>
              <h4 className='font-bold text-lg '>Strategy</h4>
              <div className='flex flex-col items-start '>
                <div className='mt-1 w-full text-sm bg-gradient-to-b from-black to-white text-transparent bg-clip-text'>
                  <input type="radio" id="big-Buys" name="strategy" value="big-Buys" className="hidden strategy" />
                  <label htmlFor="big-Buys"><span className='text-sm '>Big Option Buys</span></label>
                </div>
                <div className='mt-1 w-full'>
                  <input type="radio" id="merger" name="strategy" value="merger" className="hidden strategy" />
                  <label htmlFor="merger"><span className='text-sm '>Merger</span></label>
                </div>
                <div className='mt-1 w-full text-sm bg-gradient-to-t from-black to-white text-transparent bg-clip-text'>
                  <input type="radio" id="arbitrage" name="strategy" value="arbitrage" className="hidden strategy" />
                  <label htmlFor="arbitrage"><span className=''>Arbitrage</span></label>
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center ps-2 text-white '>
              <h4 className='font-bold text-lg'>Asset</h4>
              <div className='flex flex-col items-center '>
                <div className='mt-1 w-full text-sm bg-gradient-to-b from-black to-white text-transparent bg-clip-text'>
                  <input type="radio" id="stocks" name="asset" value="stocks" className="hidden strategy" />
                  <label htmlFor="stocks"><span className='text-sm '>Stocks</span></label>
                </div>
                <div className='mt-1 w-full'>
                  <input type="radio" id="options" name="asset" value="options" className="hidden strategy" />
                  <label htmlFor="options"><span className='text-sm '>Options</span></label>
                </div>
                <div className='mt-1 w-full text-sm bg-gradient-to-t from-black to-white text-transparent bg-clip-text'>
                  <input type="radio" id="futures" name="asset" value="futures" className="hidden strategy" />
                  <label htmlFor="futures"><span className=''>Futures</span></label>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className='m-auto w-[40%]'>
          <Button fullWidth>
            Apply
          </Button>
        </div>

      </div>
    </section>
  </>
}

export default Filtration
