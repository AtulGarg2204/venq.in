import React from 'react'
import img1 from '../../src/assets/images/new look/Frame 18.png'
import img2 from '../../src/assets/images/new look/Frame 19.png'
import img3 from '../../src/assets/images/new look/Frame 20.png'


const Cards = () => {
  return (
    <div className='w-full font-raleway md:h-[38vw] 2xl:h-[30vw] mt-[8vw] p-[5vw] md:flex justify-center items-center gap-[4vw]'>
      <div className="2xl:w-[20vw] mb-[5vw] md:w-[24vw] md:h-[26vw] 2xl:h-[22vw]  relative p-6  bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
        <h1 className='absolute font-roboto md:text-[230px] 2xl:text-[250px] font-bold text-[#bec8c3] 2xl:-top-[10vw] 2xl:-left-[2vw] md:-top-[15vw] md:-left-[2vw]'>1</h1>
        <h1 className='2xl:text-[25px] md:text-[20px] text-[22px] font-semibold md:font-medium'>Sign Up & KYC</h1>
        <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Create your free account and complete a quick KYC process to get access.</h1>
        <div className="w-full h-[200px] mt-6 bg-white rounded-[30px] flex justify-center items-center">
          <img className='scale-[1.01]' src={img1} alt="" />
        </div>
      </div>
      <div className="2xl:w-[20vw] mb-[5vw] md:w-[24vw] md:h-[26vw] 2xl:h-[22vw]  relative p-6 bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
        <h1 className='absolute font-roboto md:text-[230px] 2xl:text-[250px] font-bold text-[#868d89] 2xl:-top-[10vw] 2xl:-left-[2vw] md:-top-[15vw] md:-left-[2vw]'>2</h1>
        <h1 className='2xl:text-[25px] md:text-[20px] text-[22px] font-semibold md:font-medium'>Select</h1>
        <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Explore exclusive real estate listings and choose the property that fits your goals.</h1>
        <div className="w-full h-[200px] mt-6 bg-white rounded-[30px] flex justify-center items-center">
          <img className='scale-[.85]' src={img2} alt="" />

        </div>
      </div>
      <div className="2xl:w-[20vw] mb-[5vw] md:w-[24vw] md:h-[26vw] 2xl:h-[22vw] relative p-6 bg-zinc-100 rounded-3xl flex flex-col justify-center items-center">
        <h1 className='absolute font-roboto md:text-[230px] 2xl:text-[250px] font-bold text-zinc-600 2xl:-top-[10vw] 2xl:-left-[2vw] md:-top-[15vw] md:-left-[2vw]'>3</h1>
        <h1 className='2xl:text-[25px] md:text-[20px] text-[22px] font-semibold md:font-medium'>Invest</h1>
        <h1 className='text-center font-medium text-zinc-400 mt-5 text-[15px]'>Secure your investment with ease and watch your portfolio grow.</h1>
        <div className="w-full h-[200px] mt-6 bg-white rounded-[30px] flex justify-center items-center">
          <img className='scale-[.85]' src={img3} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Cards