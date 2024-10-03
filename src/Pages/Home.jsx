import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Travel from '../Components/Travel/Travel'
import Destinations from '../Components/Destinations/Destinations'
import Memories from '../Components/Memories/Memories'
import Adventures from '../Components/Adventures/Adventures'

const Home = () => {
  return (
    <div className='bg-[#F1F5EB]'>
        <Navbar/>
        <Banner/>
        <Travel/>
        <Destinations/>
        <Memories/>
        <Adventures/>
    </div>
  )
}

export default Home