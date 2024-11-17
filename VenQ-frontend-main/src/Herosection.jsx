import React from 'react'
import Body from './Herosection/Body'
import DailyFinance from './Herosection/DailyFinance'
import Cards from './Herosection/Cards'
import WorkTimeline from './Herosection/WorkTimeline'
import Showcase from './Herosection/Showcase'
import CardFunction from './Herosection/CardFunction'
import Investment from './Herosection/Investment'
import Crypto from './Herosection/Crypto'
import CryptoAssets from './Herosection/CryptoAssets'
import Advantage from './Herosection/Advantage'
import Prices from './Herosection/Prices'
import Footer from './Herosection/Footer'
import Testimonial from './Herosection/Testimonial'
import FAQ from './Herosection/FAQ'

const Herosection = () => {
  return (
    <div className=''>
      <Body/>
      <DailyFinance/>
      <Cards />
      <CardFunction/>
      <CryptoAssets/>
      <WorkTimeline />
      {/* <Showcase /> */}
      <Prices />
      <Investment />
      <Testimonial/>
      <Advantage/>
      {/* <Crypto/> */}
      <FAQ/>
      <Footer />
    </div>
  )
}

export default Herosection