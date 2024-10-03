import React from 'react'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import CommonHead from '../Common/CommonHead';




const Destinations = () => {
  return (
    <>
        <section className='pb-[85.14px]'>
            <div className="container">
                <div className="row flex justify-center gap-[56.77px]">
                    <div className='img flex gap-[22px]'>
                        <div className="card-one flex flex-col gap-[34.77px]">
                            <img className='w-[189.46px] h-[253px] rounded-[14.9px]' src="https://www.wedreamoftravel.com/wp-content/uploads/2020/11/Lanikai-Beach-Oahu-Hawaii.jpg" alt="Destinations" />
                            <img className='w-[146px]' src="images/desti_one.png" alt="desti" />
                        </div>
                        <div className="card-two">
                            <div className="card-two-text py-[25px] px-[31px] rounded-[14.19px] bg-second-color flex gap-[14.84px]">
                                <h2 className='text-[35.48px] font-bold font-jakarta text-white leading-[42.6px]'>25</h2>
                                <p className='w-[80.18px] text-[12.77px] font-semibold font-jakarta text-white leading-[19.9px]'>Years Of experience</p>
                            </div>
                            <img className='w-[211px] mt-[16.32px] h-[329px] rounded-[14.19px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXmX65q9isBMBrGyCpkGz8G2TJefd95PJFFg&s" alt="Destinations" />
                        </div>
                    </div>
                    <div className="text">
                        <div className="head flex gap-[7.1px] items-center">
                            <img src="images/Frame.png" alt="frame" />
                            <CommonHead text={'Why Choose Us'}/>
                        </div>
                        <h2 className='w-[447.04px] text-[35.48px] font-bold font-jakarta text-[#16171A] leading-[42.6px] mt-[7.1px]'>Where Wanderlust Meets <span className='text-brand-color'>Dream Destinations</span>  </h2>
                        <p className='w-[447.04px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px] mt-[13.35px] mb-[24.7px]'>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa Et purus duis sollicitudin dignissim habitant. Egestas nulla</p>
                        <div className="card flex gap-[21.29px]">
                            <div className="single-card w-[215.88px] p-[21px] border-[1px] border-[#E3DBD8] rounded-[14.19px]">
                                <div className='flex items-center gap-[14.19px]'>
                                    <img src="images/card-one.png" alt="card" />
                                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px]'>Passport Plus</h2>
                                </div>
                                <p className='flex items-center gap-[5.64px] mt-[14.19px] mb-[7.1px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px]'><MdKeyboardArrowRight className='text-second-color text-[18px]'/>Beyond Border Immigration</p>
                                <p className='flex items-center gap-[5.64px] mt-[14.19px] mb-[7.1px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px]'><MdKeyboardArrowRight className='text-second-color text-[18px]'/>Worldwide Visa Assistance</p>
                            </div>
                            <div className="single-card w-[215.88px] p-[21px] border-[1px] border-[#E3DBD8] rounded-[14.19px]">
                                <div className='flex items-center gap-[14.19px]'>
                                    <img src="images/card-one.png" alt="card" />
                                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px]'>Passport Plus</h2>
                                </div>
                                <p className='flex items-center gap-[5.64px] mt-[14.19px] mb-[7.1px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px]'><MdKeyboardArrowRight className='text-second-color text-[18px]'/>Beyond Border Immigration</p>
                                <p className='flex items-center gap-[5.64px] mt-[14.19px] mb-[7.1px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px]'><MdKeyboardArrowRight className='text-second-color text-[18px]'/>Worldwide Visa Assistance</p>
                            </div>
                        </div>
                            <div className='mt-[29.8px] flex items-center gap-[28.12px]'>
                                <Link className='flex items-center gap-[7.1px] py-[10.29px] px-[21.29px] border-[1px] border-second-color w-[112.67px] rounded-[708px] text-[9.93px] font-semibold font-jakarta text-brand-color leading-[21.3px] hover:bg-black hover:text-white duration-500'>Read More<FaArrowRight/></Link>
                                <div className='flex gap-[10.64px]'>
                                    <img className='w-[39.03px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4PKQqgISaYL-tLC88VOg6kcU9XkitWWjDQ&s" alt="call" />
                                    <div>
                                        <h2 className='text-[11.35px] font-normal font-jakarta text-brand-color leading-[21.3px]'>Need help?</h2>
                                        <p className='text-[12.77px] font-semibold font-jakarta text-brand-color leading-[19.9px]'>(808) 555-0111</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='flex justify-center gap-[111.41px] mt-[85.19px]'>
                    <img src="images/Companylogo.png" alt="logo" />
                    <img src="images/Companylogo1.png" alt="logo" />
                    <img src="images/Companylogo2.png" alt="logo" />
                    <img src="images/Companylogo3.png" alt="logo" />
                    <img src="images/Companylogo4.png" alt="logo" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Destinations