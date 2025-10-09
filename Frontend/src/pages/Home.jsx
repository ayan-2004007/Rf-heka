import React from 'react'
import Services from '../components/Services'
// import ServicesSwipe from '../components/ServicesSwipe'
import AllServices from '../components/AllServices'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
const Home=()=>{
    return(
        <>
        <Navbar/>
        <AllServices/>
        <Slider/>
        {/* <Footer/> */}
        </>
    )
}
export default Home