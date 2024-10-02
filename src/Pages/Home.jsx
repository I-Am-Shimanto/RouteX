import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Travel from '../Components/Travel/Travel'
import Destinations from '../Components/Destinations/Destinations'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Banner/>
        <Travel/>
        <Destinations/>
    </>
  )
}

export default Home