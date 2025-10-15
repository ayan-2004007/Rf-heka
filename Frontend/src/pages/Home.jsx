import React from 'react'
import Services from '../components/Services'
// import ServicesSwipe from '../components/ServicesSwipe'
import AllServices from '../components/AllServices'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import PartnerShip from '../components/PartnerShip'
import CategoriesCard from '../components/CategoriesCard'
import WhatsNew from '../components/WhatsNew'
import JoinUs from '../components/JoinUs'
const Home = () => {
    return (
        <>
            <div className='bg-[#E3E3E3] flex flex-col gap-6'>
                <Navbar />
                <div className='px-3 space-y-8'>
                    <CategoriesCard/>
                    <AllServices />
                    <PartnerShip />
                    <Slider />
                    <WhatsNew/>
                    <JoinUs/>
                </div>
            </div>
        </>
    )
}
export default Home