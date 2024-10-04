import React from 'react'
import CountUp from 'react-countup';

const Counter = ({number , text1 , text2}) => {
  return (
    <>
        <div className=''>
            <div className='flex'>
            <CountUp end={number} className='text-white text-[35.48px] font-bold font-jakarta leading-[42.6px]'/>
            <h2 className='text-white text-[35.48px] font-bold font-jakarta leading-[42.6px] text-center'>{text1}</h2>
            </div>
            <h2 className='text-[11.35px] font-normal font-jakarta text-white leading-[21.3px] '>{text2}</h2>
        </div>
    </>
  )
}

export default Counter