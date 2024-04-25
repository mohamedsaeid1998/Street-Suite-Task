import { MdDiscount } from "react-icons/md";
import { FaFileLines } from "react-icons/fa6";
import { IoIosTrendingUp } from "react-icons/io";
import { FaMoneyBill } from "react-icons/fa6";
import { FaMoneyBills } from "react-icons/fa6";
import { useMarketListQuery } from "@/Redux/Services/Market/MarketSlice";
import { Link } from "react-router-dom";


const Table = () => {
  //? ***************Get Market Data ***************

  const { data: marketData } = useMarketListQuery(0)

  console.log(marketData);

  return <>
    <section className=" tableSection mt-5  overflow-y-scroll ">
      <table className="  w-full overflow-y-scroll ">
        <tbody className="flex flex-col gap-4 ">
          <tr>
            <details>
              <summary className=" bg-[#313131] rounded-md py-3 flex pl-4 pr-10 justify-between "><td className="   "><div className=" flex gap-8 items-center "><span><MdDiscount className="discount-icon" size={26} /></span>AMZN</div></td>
                <hr className="border border-white h-6" />
                <td className="   "><div className=" flex gap-8  items-center"><span><FaFileLines size={26} /></span>200</div></td>
                <hr className="border border-white h-6" />
                <td className="    "><div className={` flex gap-8 items-center  `}><span><IoIosTrendingUp size={26} /></span ><span className={`${-0.25 < 0 ? "text-red-600" : "text-greenColor"}`}>-0.25 %</span></div></td>
                <hr className="border border-white h-6" />
                <td className="   "><div className=" flex gap-8  items-center"><span> <FaMoneyBill size={26} /></span>Low Risk</div></td>
              </summary>
              <p className="bg-mainBg p-8 rounded-md ">
                <h5 className="font-normal mb-3"><strong>$TSLA</strong> just announced an acquisition of <strong>$NFLX</strong> at <strong>$200 B</strong>.</h5>
                This is an <Link to={'./'} className="text-activeColor underline">arbitrage opportunity</Link>, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails, If the deal success is % and therefore the recommended play is <Link to={'./'} className="text-activeColor underline">long/short</Link>  $ABC
              </p>
            </details>
          </tr>





















        </tbody>
      </table>
    </section>

  </>
}

export default Table