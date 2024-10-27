import React from 'react'
import CommonHead from '../Common/CommonHead'
import './Exploring.css'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";




const Exploring = () => {
  return (
    <>
        <section className='exploring '>
            <div className="container">
                <div className="row pb-[85.6px]">
                <div className="text flex justify-between px-[260.27px] flex-col ">
                        <div className='flex items-center gap-[7.1px] pt-[52.16px]'>
                            <img src="images/Frame.png" alt="frame" />
                            <CommonHead text={'Our Coaching'}/>
                        </div>
                            <h2 className='w-[447.04px] text-[35.48px] font-bold font-jakarta text-brand-color leading-[42.6px] pt-[7.1px] pb-[41.73px]'>Exploring the Unknown Voyages of Wonder  </h2>
                            <div className='box flex justify-between'>
                                <div className="card flex flex-col gap-[21.28px]">
                                <div className="singlecard flex items-center justify-between w-[590.15px] h-[92.25px] border-[1px] border-[#E3DBD8] rounded-[14.19px] py-[21px] px-[28.38px] bg-white">
                                    <div className="text">
                                        <h2 className='text-[15.61px] font-jakarta font-bold text-brand-color leading-[21.3px]'>Courtney Henry</h2>
                                        <p className='text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.39px]'>Medical Assistant</p>
                                    </div>
                                    <div className="arrow w-[42.58px] h-[42.58px] bg-second-color rounded-full flex items-center justify-center">
                                        <FaArrowRight className='text-white'/>
                                    </div>
                                </div>
                                <div className="singlecard flex items-center justify-between w-[590.15px] h-[92.25px] border-[1px] border-[#E3DBD8] rounded-[14.19px] py-[21px] px-[28.38px] bg-white">
                                    <div className="text">
                                        <h2 className='text-[15.61px] font-jakarta font-bold text-brand-color leading-[21.3px]'>Courtney Henry</h2>
                                        <p className='text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.39px]'>Marketing Coordinator</p>
                                    </div>
                                    <div className="arrow w-[42.58px] h-[42.58px] bg-second-color rounded-full flex items-center justify-center">
                                        <FaArrowRight className='text-white'/>
                                    </div>
                                </div>
                                <div className="singlecard flex items-center justify-between w-[590.15px] h-[92.25px] border-[1px] border-[#E3DBD8] rounded-[14.19px] py-[21px] px-[28.38px] bg-white">
                                    <div className="text">
                                        <h2 className='text-[15.61px] font-jakarta font-bold text-brand-color leading-[21.3px]'>Albert Flores</h2>
                                        <p className='text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.39px]'>Web Designer</p>
                                    </div>
                                    <div className="arrow w-[42.58px] h-[42.58px] bg-second-color rounded-full flex items-center justify-center">
                                        <FaArrowRight className='text-white'/>
                                    </div>
                                </div>
                                </div>
                                <div className="img relative">
                                    <div className="social-icons absolute bottom-7 left-[65.7px] bg-white flex gap-[17px] py-[7.1px] px-[11px] rounded-full">
                                        <Link><FaXTwitter className='text-brand-color hover:text-second-color duration-[0.3s] text-xl'/></Link>
                                        <Link><FaFacebookF className='text-brand-color hover:text-second-color duration-[0.3s] text-xl'/></Link>
                                        <Link><FaInstagram className='text-brand-color hover:text-second-color duration-[0.3s] text-xl'/></Link>
                                        <Link><FaLinkedinIn className='text-brand-color hover:text-second-color duration-[0.3s] text-xl'/></Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default Exploring
