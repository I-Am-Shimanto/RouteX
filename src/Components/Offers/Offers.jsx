import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
import CountUp from 'react-countup';
import Counter from '../Common/Counter';


const Offers = () => {
  return (
    <>
        <section className='pt-[85.16px] pb-[85.16px]'>
            <div className="container">
                <div className="row flex justify-center gap-[21.29px]">
                    <div className="img">
                        <img className='w-[290.93px] h-[431.43px] rounded-[14.19px] hover:scale-[1.03] duration-[0.5s]' src="https://trekthehimalayas.com/images/KashmirGreatLakesTrek/MobileSlider/c4fcd0d9-a0ac-42ca-bd9c-d11313436523_KGL.webp" alt="offers" />
                    </div>
                    <div className='text'>
                        <div className="card w-[603.15px] rounded-[14.19px] border-[1px] bg-white flex hover:scale-[1.03] duration-[0.5s]">
                            <div className="card-text pt-[28.38px] pl-[42.58px]">
                                <img src="images/offerimg1.png" alt="offer" />
                                <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px] pt-[12.6px] pb-[8.52px]'>Get our best offers quickly</h2>
                                <p className='w-[335.64px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px]'>Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum has been the industry's standard dummy</p>
                                <Link className='w-[115.67px] h-[42.58px] rounded-full border-[1px] border-[#E3DBD8] py-[10.29px] px-[21.29px] mt-[15.9px] mb-[28.38px] flex items-center gap-[7.1px] text-[9.93px] font-semibold font-jakarta text-brand-color leading-[21.3px] hover:bg-black hover:text-white duration-[0.3s]'>Contact us <FaArrowRight/></Link>
                            </div>
                            <div className="card-img">
                                <img className='h-full rounded-[14.19px]' src="https://d2jdgazzki9vjm.cloudfront.net/tourist-places/images/tourist-places-in-bangladesh20.jpg" alt="offers" />
                            </div>
                        </div>
                        <div className='bg-second-color rounded-[14.19px] flex justify-between px-[42px] py-[42px] mt-[21.28px] hover:scale-[1.03] duration-[0.5s]'>
                            <Counter number={10} text1={'k+'} text2={'Complete project'}/>
                            <Counter number={20} text1={'+'} text2={'Team member'}/>
                            <Counter number={5} text1={'k+'} text2={'Winning award'}/>
                            <Counter number={100} text1={'+'} text2={'Complete project'}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Offers