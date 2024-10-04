import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";


const Banner = () => {
  return (
    <>
        <section className='mt-[21.73px]'>
            <div className="container">
                <div className="row bg-brand-color rounded-[35px] flex items-center pt-[81.73px] pl-[180.95px]">
                    <div className="banner-text">
                        <h1 className='w-[525px] text-[56px] font-jakarta font-bold text-white leading-[63.9px] pb-[27.97px]'>Visa Made Easy Dreams Made Possible</h1>
                        <div className='flex gap-[21.02px]'>
                            <Link className='flex items-center gap-[7.1px] py-[10.29px] px-[21.29px] border-[1px] border-white rounded-[708px] text-[10px] font-jakarta font-semibold text-white leading-[21.3px] hover:bg-black hover:scale-[1.05] duration-[0.3s]'>Read More <FaArrowRight/></Link>
                            <Link className='flex items-center gap-[7.1px] text-[13px] font-semibold font-jakarta text-white leading-[20px]'><FaCirclePlay/>Watch Our Videos</Link>
                        </div>
                    </div>
                    <div className="banner-img">
                        <img className='' src="images/banner.png" alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner