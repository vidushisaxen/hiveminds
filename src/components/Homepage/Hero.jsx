import Image from 'next/image'
import React, { useState } from 'react'
import LinkButton from '../Button/LinkButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import  styles from '@/styles/caseStudySwiper.module.css';

const CaseStudyCard = ({ src, no, para }) => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-full h-full relative'>
        <Image
          src={src}
          fill
          alt='big-basket'
          className='object-fill'
        />
        <div className='absolute top-[2%] rounded-br-[20px] flex items-center justify-center gap-[1vw]'>
          <p className='font-medium text-[2.25vw]'>{no}</p>
          <p className='text-[1.05vw] font-medium w-[45%]'>{para}</p>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const slidesData = [
    { 
      title: "Delivering Digital", 
      subtitle: "Growth", 
      description: "Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands" 
    },
    { 
      title: "Boosting New", 
      subtitle: "Orders", 
      description: "Unlocking new orders with innovative strategies tailored to your business goals" 
    },
    { 
      title: "Enhancing Brand", 
      subtitle: "Recognition", 
      description: "Helping brands stand out with impactful campaigns and strategies" 
    },
  ]

  return (
    <section id='hero'>
      <div className=' w-screen h-screen flex items-center justify-center container-lg'>
        <div className='w-[55%] flex flex-col gap-[3vw]'>
          <h1 className='heading-1 leading-[1.2]'>
            <span>{slidesData[activeIndex].title}</span><br />
            <span className='blue-text'>{slidesData[activeIndex].subtitle}</span>
          </h1>
          <p className='content w-[75%] tracking-wide'>
            {slidesData[activeIndex].description}
          </p>
          <LinkButton text={"View Case Study"} link={"#"} />
        </div>

        <div className='w-[41%] h-[63%]'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className={`${styles.caseStudySwiper} w-full h-full`}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            <SwiperSlide>
              <CaseStudyCard 
                src={"/assets/images/homepage/big-basket.png"} 
                no={"2.35x"} 
                para={"Growth In Installs"} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <CaseStudyCard 
                src={"/assets/images/homepage/dominos.png"} 
                no={"430k+"} 
                para={"New Orders Within 1 Year"} 
              />
            </SwiperSlide>
            <SwiperSlide>
              <CaseStudyCard 
                src={"/assets/images/homepage/fly-dubai.png"} 
                no={"67%"} 
                para={"Growth in Brand Searches"} 
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Hero
