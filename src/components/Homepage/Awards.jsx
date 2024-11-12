import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import { Navigation } from 'swiper/modules';

const AwardCard=({img,title,year,category})=>{
    return(
        <>
        <div className='w-[34.2vw] h-[11.5vw] border-[0.5px] border-white rounded-[20px] flex items-center  px-[1vw]  bg-white/30 awards-card'>
        <div className='flex items-center justify-between gap-[1vw] w-full'>
            <div className='w-[10vw] h-[8.3vw] relative'>
            <Image src={img} fill alt='awards-1'/>
            </div>
            <div>
                <p className='text-white text-[1.25vw] font-medium montreal '>{title}</p>
                <p className='content-white'>{year}</p>
                <p className='content-white'>{category}</p>
            </div>
            </div>

        </div>
        </>
    )
}
const Awards = () => {
  return (
    <section id='awards '>
        <div className='h-screen w-[99vw] rounded-[30px] bg-[#134BD6] flex flex-col items-start justify-center px-[3vw]'>
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
              <Swiper  loop={true} modules={[Navigation]} className="awards-swiper w-full h-full flex items-center justify-center mt-[10%]">
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-1.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-2.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-3.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-1.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-2.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        <SwiperSlide>
            <AwardCard
        img={"/assets/images/homepage/awards-3.png"}
        title={"Ranked among Financial Times High Growth Companies Asia Pacific"}
        year={"2024"}
        category={"Digital Marketing"}
        />
        </SwiperSlide>
        
      </Swiper>
              </div>
        </div>

    </section>
  )
}

export default Awards