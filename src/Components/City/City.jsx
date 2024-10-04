import React from 'react'
import CommonHead from '../Common/CommonHead'
import CityCard from '../Common/CityCard';

const City = () => {
  return (
    <>
        <section>
            <div className="container">
                <div className="row pl-[265.3px]">
                    <div className='flex items-center gap-[7.1px]'>
                        <CommonHead text={'Available Countries'}/>
                        <img src="images/OBJECTS.png" alt="objects" />
                    </div>
                    <h2 className='w-[447px] text-[35.48px] font-bold font-jakarta text-brand-color leading-[42.6px] pt-[7.03px]'>Urban Escapes City Hopping Adventures</h2>
                </div>
                <div className='flex justify-center gap-[21.29px] pt-[42.73px]'>
                <CityCard image={<img className='w-[49px] rounded-full mt-[14.19px]' src="images/canada.png" alt="canada" />}  country={'Canada'} text1={'Mistakes To Avoid'} text2={'Your Startup'} text3={'Knew About Fonts'}/><CityCard image={<img className='w-[49px] rounded-full mt-[14.19px]' src="images/bangladesh.png" alt="australia" />}  country={'Bangladesh'} text1={'Mistakes To Avoid'} text2={'Your Startup'} text3={'Knew About Fonts'}/><CityCard image={<img className='w-[49px] rounded-full mt-[14.19px]' src="images/australia.png" alt="australia" />}  country={'Australia'} text1={'Mistakes To Avoid'} text2={'Your Startup'} text3={'Knew About Fonts'}/><CityCard image={<img className='w-[49px] rounded-full mt-[14.19px]' src="images/uk.png" alt="uk" />}  country={'United Kingdom'} text1={'Mistakes To Avoid'} text2={'Your Startup'} text3={'Knew About Fonts'}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default City