import React from 'react'
import CommonHead from '../Common/CommonHead'
import VisaCard from '../Common/VisaCard';


const Adventures = () => {
  return (
    <>
        <section className='pt-[85.16px] pb-[85.14px]'>
            <div className="container">
                <div className="row">
                    <div className="head flex items-center justify-center gap-[7.1px]">
                        <img src="images/Frame.png" alt="frame" />
                        <CommonHead text={'Visa Category'}/>
                    </div>
                    <h2 className='w-[447.04px] text-[35.48px] font-bold font-jakarta text-brand-color leading-[42.6px] text-center m-auto pt-[7.1px] pb-[41.72px]'>Seeking Adventure Thrills and Excitement Await</h2>
                    <div className="flex justify-center gap-[21.29px]">
                        <VisaCard heading={'Business Visa'} image={<img className='w-[183.07px] h-[178.11px] rounded-[14.19px] mt-[14.19px]' src="https://5.imimg.com/data5/SELLER/Default/2021/3/IE/XF/WH/112977754/business-visa-services-500x500.jpeg" alt="business visa" />}/>
                        <VisaCard heading={'Working Visa'} image={<img className='w-[183.07px] h-[178.11px] rounded-[14.19px] mt-[14.19px]' src="https://static.vecteezy.com/system/resources/previews/022/412/228/non_2x/work-visa-rubber-grunge-stamp-seal-illustration-vector.jpg" alt="business visa" />}/>
                    </div>
                    <div className="flex justify-center gap-[21.29px] mt-[23.42px]">
                        <VisaCard heading={'Student Visa'} image={<img className='w-[183.07px] h-[178.11px] rounded-[14.19px] mt-[14.19px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2-Rez4rHVCYRpUB-7d5xopKa9Hc7vqNVoRw&s" alt="business visa" />}/>
                        <VisaCard heading={'Tourist Visa'} image={<img className='w-[183.07px] h-[178.11px] rounded-[14.19px] mt-[14.19px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2TrbP8yoJV7_14Ftay5d-GNw0dEHleYfgQ&s" alt="business visa" />}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Adventures