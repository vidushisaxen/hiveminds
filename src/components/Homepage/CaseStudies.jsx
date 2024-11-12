import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar , Autoplay} from 'swiper/modules';
import Image from 'next/image';
import PrimaryButton from '../Button/PrimaryButton';

const CaseStudies = () => {
  return (
    <>
      <section id="caseStudies">
        <div className="w-screen h-full flex items-center justify-center  z-[10] absolute ">
          <div className="w-[92%] h-full rounded-[30px] bg-white flex items-center justify-center px-[2vw] pt-[3vw] shadow-2xl drop-shadow-2xl">
            <div className="w-[40%] h-full ">
              <div>
                <h2 className="heading-2 ">
                  Growth Isn&apos;t Just a Buzzword - It&apos;s About Real{" "}
                  <span className="blue-text">Impact</span>
                </h2>
                <p className="content w-[80%]">
                Explore the challenges we&apos;ve overcome and the strategies we&apos;ve implemented to deliver exceptional results across various industries.
                </p>
              </div>
              <div className="flex flex-wrap items-center mt-[4vw] gap-[2vw]">
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">All</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">Healthcare</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">Automobiles</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">Wearables</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">NBFC</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">BFSI</p>
                </div>
                <div className="border-[1.5px] border-[#134BD6] text-center flex items-center justify-center px-[2vw] py-[1vw] rounded-[40px] min-w-[10vw] hover:bg-[#134BD6] hover:text-white duration-300 transition-all ease cursor-pointer">
                <p className="content">CDIT</p>
                </div>
              </div>
            </div>
            <div className="w-[60%] h-[80%] flex items-center justify-center">
            <Swiper
        scrollbar={{
          hide: false,
        }}
        // autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
  spaceBetween={20}
        modules={[Scrollbar, Autoplay]}
        className="casestudy-swiper w-full h-[80%]"
      >
        <SwiperSlide >
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/bigbasket-casestudy.png"
                fill
                alt="bigbasket-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw]'>
          <p className='font-medium text-[2.5vw] leading-[1]'>2.35x</p>
          <p className='text-[1.1vw] font-medium leading-[1]'>Growth in installs</p>
        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/dominos-casestudy.png"
                fill
                alt="dominos-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw] '>
          <p className='font-medium text-[2.5vw] leading-[1]'>430k+</p>
          <p className='text-[1.1vw] font-medium w-[50%] leading-[1]'>New orders within 1 year</p>
        </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/flydubai-casestudy.png"
                fill
                alt="flydubai-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw]'>
          <p className='font-medium text-[2.5vw] leading-[1]'>67%</p>
          <p className='text-[1.1vw] font-medium w-[53%] leading-[1] '>Growth in brand searches</p>
        </div>

            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/bigbasket-casestudy.png"
                fill
                alt="bigbasket-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw]'>
          <p className='font-medium text-[2.5vw] leading-[1]'>2.35x</p>
          <p className='text-[1.1vw] font-medium leading-[1]'>Growth in installs</p>
        </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/dominos-casestudy.png"
                fill
                alt="dominos-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw] '>
          <p className='font-medium text-[2.5vw] leading-[1]'>430k+</p>
          <p className='text-[1.1vw] font-medium w-[50%] leading-[1]'>New orders within 1 year</p>
        </div>

            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='relative w-[25vw] h-[30.5vw]'>
                <Image src="/assets/images/homepage/flydubai-casestudy.png"
                fill
                alt="flydubai-casestudy"
                 />
                  <div className='absolute top-[-0.7%] right-[-3%] rounded-br-[20px] flex 
                  flex-col items-center justify-center w-[15vw]'>
          <p className='font-medium text-[2.5vw] leading-[1]'>67%</p>
          <p className='text-[1.1vw] font-medium w-[53%] leading-[1] '>Growth in brand searches</p>
        </div>

            </div>
        </SwiperSlide>
       
      </Swiper>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
