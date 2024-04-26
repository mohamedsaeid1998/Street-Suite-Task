import { FaArrowUpRightDots, FaBell, FaFolderOpen, FaGears, FaGraduationCap } from "react-icons/fa6";
import { IoMdClose } from 'react-icons/io';
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

import "./CircularNav.scss";
const CircularNav = () => {

  return <>
    <div className='circularNav '>
      <div className="site">
        <div className="container">
          <nav className='navigation'>
            <input type="checkbox" id='link' hidden />
            <label htmlFor="link" className='link'>
              <span className='menu'><MdOutlineMenu size={"35px"} /></span>
              <span className='close'><IoMdClose size={"35px"} /></span>
            </label>
            <ul className='submenu'>
              <li><Link to={'./'}><span>Alerts</span><FaBell /></Link></li>
              <li><Link to={'./'}><span>Training</span><FaGraduationCap /></Link></li>
              <li><Link to={'./'}><span>Automation</span><FaGears /></Link></li>
              <li><Link to={'./'}><span>Portfolio</span><FaFolderOpen /></Link></li>
              <li><Link to={'./'}><span>Trading</span><FaArrowUpRightDots /></Link></li>
            </ul>
          </nav>
        </div>
      </div>

    </div>

  </>
}

export default CircularNav