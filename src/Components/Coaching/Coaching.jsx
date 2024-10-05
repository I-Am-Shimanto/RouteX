import React from 'react'
import CommonHead from '../Common/CommonHead'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";


const Coaching = () => {
  return (
    <>
        <section >
            <div className="container">
                <div className="row">
                    <div className="text flex justify-between px-[260.27px] flex-col ">
                        <div className='flex items-center gap-[7.1px]'>
                            <img src="images/Frame.png" alt="frame" />
                            <CommonHead text={'supporting Coaching'}/>
                        </div>
                            <h2 className='w-[447.04px] text-[35.48px] font-bold font-jakarta text-brand-color leading-[42.6px] pt-[7.1px] pb-[41.73px]'>A Tapestry of Experiences Cultural Encounters </h2>
                    </div>
                    <div className="card flex justify-center gap-[21.29px]">
                        <div className="single-card w-[290.93px] ">
                            <img className='rounded-[14.19px] h-[229px] w-[290.93px]' src="https://www.britannicaoverseas.com/uploads/exams/toefl-coaching-in-gurgaon-1536x1025_1693208224.jpg" alt="card" />
                            <div className="mini-card px-[28.38px] py-[21.29px] bg-second-color rounded-[14.19px] mt-4 flex justify-between items-center hover:scale-[1.05] duration-[0.3s] ">
                                <div>
                                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px]'>TOFEL Coaching</h2>
                                    <p className='w-[134.82px] text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.3px]'>There are many variati of passages of engineer</p>
                                </div>
                                <Link className='p-3 border-[1px] border-[#E3DBD8] rounded-[14.19px] h-[42.58px] text-[14.19px] font-bold text-brand-color hover:bg-brand-color hover:text-white duration-[0.3s]'><FaArrowRight className='rotate-[-45deg]'/></Link>
                            </div>
                        </div>
                        <div className="single-card w-[290.93px] ">
                            <img className='rounded-[14.19px] h-[229px] w-[290.93px]' src="https://i0.wp.com/pecpte.com/wp-content/uploads/2020/08/IELTS-Coaching-in-Dhaka-Bangladesh.jpg?fit=640%2C564&ssl=1" alt="card" />
                            <div className="mini-card px-[28.38px] py-[21.29px] bg-second-color rounded-[14.19px] mt-4 flex justify-between items-center hover:scale-[1.05] duration-[0.3s] ">
                                <div>
                                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px]'>IELTS Coaching</h2>
                                    <p className='w-[134.82px] text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.3px]'>There are many variati of passages of engineer</p>
                                </div>
                                <Link className='p-3 border-[1px] border-[#E3DBD8] rounded-[14.19px] h-[42.58px] text-[14.19px] font-bold text-brand-color hover:bg-brand-color hover:text-white duration-[0.3s]'><FaArrowRight className='rotate-[-45deg]'/></Link>
                            </div>
                        </div>
                        <div className="single-card w-[290.93px] ">
                            <img className='rounded-[14.19px] h-[229px] w-[290.93px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRurEEalbXSg3-1mippxplPoUcCfAWqq4aCIg&s" alt="card" />
                            <div className="mini-card px-[28.38px] py-[21.29px] bg-second-color rounded-[14.19px] mt-4 flex justify-between items-center hover:scale-[1.05] duration-[0.3s] ">
                                <div>
                                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px]'>OET Coaching</h2>
                                    <p className='w-[134.82px] text-[11.35px] font-medium font-jakarta text-para_color leading-[21.3px] pt-[6.3px]'>There are many variati of passages of engineer</p>
                                </div>
                                <Link className='p-3 border-[1px] border-[#E3DBD8] rounded-[14.19px] h-[42.58px] text-[14.19px] font-bold text-brand-color hover:bg-brand-color hover:text-white duration-[0.3s]'><FaArrowRight className='rotate-[-45deg]'/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Coaching