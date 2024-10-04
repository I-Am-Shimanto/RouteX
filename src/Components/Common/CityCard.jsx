import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";


const CityCard = ({image , country , text1 , text2 , text3}) => {
  return (
    <>
        <div className="single-card pt-[28.38px] pr-[72.95px] pb-[26.25px] pl-[21.29px] border-[1px] border-[#E3DBD8] w-[224.88px] rounded-[14.19px] hover:bg-white hover:scale-[1.05] duration-[0.5s]">
                    <div className='img'>
                        {image}
                    </div>
                    <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px] pt-[14.19px] pb-[4px]'>{country}</h2>
                    <p className='flex items-center gap-[10.64px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px] pt-[7.1px]'><MdKeyboardArrowRight className='text-brand-color text-xl rotate-[90deg]'/>{text1}</p>
                    <p className='flex items-center gap-[10.64px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px] pt-[7.1px]'><MdKeyboardArrowRight className='text-brand-color text-xl rotate-[90deg]'/>{text2}</p>
                    <p className='flex items-center gap-[10.64px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px] pt-[7.1px]'><MdKeyboardArrowRight className='text-brand-color text-xl rotate-[90deg]'/>{text3}</p>
                </div>
    </>
  )
}

export default CityCard