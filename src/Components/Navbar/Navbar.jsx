import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
        <nav className='pt-[28.37px]'>
            <div className="container">
                <div className="row flex justify-between items-center">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo" />
                    </div>
                    <div className="nav_links">
                        <ul className='flex gap-[17.03px]'>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Home<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>About Us<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Services<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Projects<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Blog<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Page<IoIosArrowDown/> </Link></li>
                            <li><Link className='flex items-center gap-[3.5px] text-[10px] font-bold font-jakarta text-brand-color leading-[18.4px] hover:scale-[1.3] duration-[0.3s]'>Contact<IoIosArrowDown/> </Link></li>
                        </ul>
                    </div>
                    <div className="nav-btn">
                        <button className='flex items-center gap-[7.1px] py-[10.29px] px-[21.29px] bg-second-color rounded-[106px] text-[10px] font-jakarta font-semibold text-white leading-[21px] hover:scale-[1.05] duration-[0.3s] hover:bg-brand-color'>Get An Appointment<FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar