import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from "react-icons/fa";


const VisaCard = ({image , heading}) => {
  return (
    <>
        
                      <div className="single-card flex justify-between w-[447.04px] h-[206.49px] rounded-[14.19px] pl-[14.19px] pr-[28.38px] border-[1px] border-[#E3DBD8] hover:scale-[1.05] duration-[0.3s]">
                            <div className="img">
                                {image}
                            </div>
                            <div className="text">
                                <h2 className='text-[15.61px] font-bold font-jakarta text-brand-color leading-[21.3px] pt-[28.38px]'>{heading}</h2>
                                <p className='w-[184.49px] text-[11.35px] font-normal font-jakarta text-para_color leading-[21.3px] pt-[6.39px] pb-[21.15px]'>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis  the venenatis cras sed eu </p>
                                <div className="links flex gap-[102.89px] items-center">
                                    <Link className='p-3 border-[1px] border-[#E3DBD8] rounded-[14.19px] text-[14.19px] font-bold text-[#83CD20]'><FaLocationArrow/></Link>
                                    <img src="images/visa1.png" alt="visa" />
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default VisaCard