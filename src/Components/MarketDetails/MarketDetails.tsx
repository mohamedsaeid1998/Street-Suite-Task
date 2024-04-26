//@ts-nocheck
import { IFilterData } from "@/InterFaces";
import { useEffect } from "react";
import { FaFileLines, FaMoneyBill, FaMoneyBills } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
import { MdDiscount } from "react-icons/md";
import { Link } from "react-router-dom";

interface IProps {
  searchValue: string
  formData: {
    asset: string;
    filteredItems: never[];
    risk: string;
    strategy: string;
    market: string;
  }
  setFilterData: React.Dispatch<React.SetStateAction<never[]>>
  filterData: never[]
  marketData: []
}
const MarketDetails = ({ searchValue, formData, setFilterData, filterData, marketData }: IProps) => {

  useEffect(() => {

    //? ***************Get Market Data ***************
    if (!searchValue && !(formData?.filteredItems?.length > 0)) {
      setFilterData(marketData)
      return;
    }

    //! ***************Header Search Input ***************
    if (searchValue) {

      const filteredResults = marketData?.filter(item =>
        item?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())
      );
      setFilterData(filteredResults)
      return;
    }
    //* ***************Filtered Data ***************
    if (formData?.filteredItems) {

      const filteredByRisk = marketData?.filter(({ risk }: any) => risk === formData?.risk);

      setFilterData(filteredByRisk)

      const filteredByStrategy = filteredByRisk?.filter(({ strategy }: any) => strategy === formData?.strategy);

      setFilterData(filteredByStrategy)

      const filteredByAsset = filteredByStrategy?.filter(({ asset }: any) => asset === formData?.asset);

      setFilterData(filteredByAsset)

      const filteredByIndustry = filteredByAsset?.filter(({ industry }: any) => formData?.filteredItems?.includes(industry));

      setFilterData(filteredByIndustry)

    }

  }, [marketData, searchValue, formData])

  return <>
    <section className=" tableSection mt-5  overflow-y-scroll flex flex-col gap-4 ">
      {filterData?.length <= 0 && <div className="h-[86vh] flex justify-center items-center">No Data</div>}
      {filterData?.map(({ name, marketCap, marketIndex, risk }: IFilterData) => <details className="group" key={name}>
        <summary className=" bg-[#313131] hover:bg-activeColor group-open:bg-activeColor rounded-md py-3 flex pl-4 pr-2 justify-between ">
          <div className=" flex-1  "><div className=" flex gap-8 items-center  "><span><MdDiscount className="discount-icon" size={26} /></span>{name}</div></div>
          <div className="  flex-1  "><div className=" flex gap-8  items-center   "><span><FaFileLines size={26} /></span>{marketCap}</div></div>
          <div className=" flex-1  hidden sm:block  "><div className={` flex gap-8 items-center  `}><span><IoIosTrendingUp size={26} /></span ><span className={`${Number(marketIndex) < 0 ? "text-red-600" : "text-greenColor"}`}>{marketIndex} %</span></div></div>
          <div className="  flex-1 hidden md:block "><div className=" flex gap-8  items-center"><span> {risk === "Low Risk" ? <FaMoneyBill size={26} /> : <FaMoneyBills size={26} />}</span>{risk}</div></div>
        </summary>
        <article className="bg-mainBg p-8 rounded-md ">
          <p className="font-normal mb-3"><strong>$TSLA</strong> just announced an acquisition of <strong>$NFLX</strong> at <strong>$200 B</strong>.</p>
          This is an <Link to={'./'} className="text-activeColor underline">arbitrage opportunity</Link>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is <Link to={'./'} className="text-activeColor underline">long/short</Link>$ABC
        </article>
      </details>
      )}

    </section >

  </>
}

export default MarketDetails