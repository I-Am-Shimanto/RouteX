import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Memories = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="bg-brand-color rounded-[35.48px] pt-[80.89px] pl-[180.95px]">
                    <div className="head-text flex gap-[7.1px] ">
                        <img src="images/Frame2.png" alt="frame" />
                        <p className='text-[9.93px] font-jakarta font-semibold text-white leading-[9.9px]'>Our Countries</p>
                    </div>
                    <div className='pt-[7.1px] '>
                        <h2 className='w-[447.04px] text-[35.48px] font-jakarta font-bold text-white leading-[42.6px]'>Making Memories Around World Unforgettable</h2>
                    </div>
                    <div className="img pt-[41.7px] pr-[180.95px] pb-[85.15px] flex justify-between">
                    <img className='w-[160px] h-[299.45px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52dSQ-LjLwKYnyDi827S44zalCoEndPR3Yg&s" alt="memories" />
                    <div className="single relative">
                        <img className='w-[290.93px] h-[299.45px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkp5hzqXKC8Nryh1gTGnHN6NCj3_mAxokhPTV11GGYwONK97snbuejTsU5llEgiUs_CrE&usqp=CAU" alt="memories" />
                        <div className="card w-[273.9px] h-[169.59px] bg-second-color absolute bottom-[8.51px] left-[8.52px] rounded-[14.19px] pt-[21.99px] pl-[19.87px] hover:scale-[1.06] duration-[0.3s]">
                            <h2 className='text-[15.61px] font-bold font-jakarta text-white leading-[21.3px]'>Working Visa</h2>
                            <p className='w-[205.75px] text-[11.35px] font-normal font-jakarta text-white leading-[21.3px] pt-[6.38px] pb-[13.77px]'>Lorem Ipsum is simply dummy text the printing and provide best visa ever</p>
                            <button className='flex gap-[7.1px] items-center py-[10.29px] px-[21.29px] border-[1px] border-white rounded-[708px] text-[9.93px] font-jakarta font-semibold text-white hover:bg-black hover:text-white duration-500 '>Apply Now<FaArrowRight/></button>
                        </div>
                    </div>
                    <img className='w-[160px] h-[299.45px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsGPYGjZ3xHk2reHxvxLJ69qrGjZjKWzKUg&s" alt="memories" />
                    <img className='w-[160px] h-[299.45px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1-8lgNdfvb7IdWEFgH-wr2zOUO2TtVQtM3g&s" alt="memories" />
                    <img className='w-[160px] h-[299.45px] rounded-[20px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ52dSQ-LjLwKYnyDi827S44zalCoEndPR3Yg&s" alt="memories" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Memories