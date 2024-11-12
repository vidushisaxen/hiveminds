import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import { Navigation } from 'swiper/modules';

const AwardCard=()=>{
    return(
        <>
        <div className='w-[35vw] h-[12vw] border-[0.5px] border-white rounded-[20px] flex items-center justify-center gap-[2vw] px-[2vw] bg-white/30 awards-card'>
            <div className='w-[7vw] h-[7vw] relative'>
            <Image src="/assets/images/homepage/awards-1.png" fill alt='awards-1'/>
            </div>
            <div>
                <p className='text-white'>Ranked among Financial Times High Growth Companies Asia Pacific</p>
                <p className='content-white'>2024</p>
                <p className='content-white'>Digital Marketing</p>
            </div>

        </div>
        </>
    )
}
const Awards = () => {
  return (
    <section id='awards '>
        <div className='h-[150vh] w-[98vw] rounded-[30px] bg-[#134BD6] flex flex-col items-start justify-center px-[3vw] relative mt-[45vw]'>
            <div className='w-[35%]'>
        <h2 className=" text-[3.4vw] font-medium montreal text-white">
            <span className=''>
        Our Accolades Speak For Themselves
        </span>
                </h2>
                <p className="content-white w-[80%]">
                Discover our accolades and industry recognition that highlight our commitment to excellence.
                </p>
              </div>
              <div className='w-[95vw] h-[30%] flex items-center justify-center '>
              <Swiper navigation={true} loop={true} modules={[Navigation]} className="awards-swiper w-full h-full flex items-center justify-center mt-[10%]">
        <SwiperSlide><AwardCard/></SwiperSlide>
        <SwiperSlide><AwardCard/></SwiperSlide>
        <SwiperSlide><AwardCard/></SwiperSlide>
        <SwiperSlide><AwardCard/></SwiperSlide>
        <SwiperSlide><AwardCard/></SwiperSlide>
        <SwiperSlide><AwardCard/></SwiperSlide>
        
      </Swiper>
              </div>
        </div>

    </section>
  )
}

export default Awards