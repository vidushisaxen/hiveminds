import Image from 'next/image'
import React, { useState } from 'react'
import LinkButton from '../Button/LinkButton'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'

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
        <div className='absolute top-[2%] rounded-br-[20px] flex items-center justify-center gap-[2vw]'>
          <p className='font-medium text-[2.5vw]'>{no}</p>
          <p className='text-[1.1vw] font-medium w-[40%]'>{para}</p>
        </div>
      </div>
    </div>
  )
}

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const slidesData = [
    { title: "Delivering Digital", subtitle: "Growth" },
    { title: "Boosting New", subtitle: "Orders" },
    { title: "Enhancing Brand", subtitle: "Recognition" },
  ]

  return (
    <section id='hero' className='w-screen h-screen flex items-center justify-center'>
      <div className='w-[90%] h-full flex items-center justify-between'>
        <div className='w-[55%] flex flex-col gap-[3vw]'>
          <h1 className='heading-1 leading-[1.2]'>
            <span>{slidesData[activeIndex].title}</span><br />
            <span className='blue-text'>{slidesData[activeIndex].subtitle}</span>
          </h1>
          <p className='content w-[75%] tracking-wide'>
            Expert-driven, Tech-powered, Data-optimized growth for lean startups to household brands
          </p>
          <LinkButton text={"View Case Study"} link={"#"} />
        </div>

        <div className='w-[45%] h-[80%]'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            loop={true}
            modules={[EffectCards]}
            className="caseStudySwiper w-full h-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            <SwiperSlide><CaseStudyCard 
              src={"/assets/images/homepage/big-basket.png"} 
              no={"2.35x"} 
              para={"Growth In Installs"} 
            /></SwiperSlide>
            <SwiperSlide><CaseStudyCard 
              src={"/assets/images/homepage/dominos.png"} 
              no={"430k+"} 
              para={"New Orders Within 1 Year"} 
            /></SwiperSlide>
            <SwiperSlide><CaseStudyCard 
              src={"/assets/images/homepage/fly-dubai.png"} 
              no={"67%"} 
              para={"Growth in Brand Searches"} 
            /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Hero
