import React, { useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards } from 'swiper/modules'
import PrimaryButton from '../Button/PrimaryButton'
import gsap from 'gsap'
import Image from 'next/image'

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
  const firstSlideRef = useRef(null);
  const secondSlideRef = useRef(null);
  const thirdSlideRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

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
      subtitle: "Search", 
      description: "Helping brands stand out with impactful campaigns and strategies" 
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(firstSlideRef.current, {
      scale: 0,
      opacity: 0.5,
      ease: 'power3.out',
      duration: 1,
    })
    .from(secondSlideRef.current, {
      x: 10,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.7,
    }, '-=0.5')
    .from(thirdSlideRef.current, {
      x: 10,
      opacity: 0,
      ease: 'power3.out',
      duration: 0.7,
    }, '-=0.5'); 
  }, []);

  return (
    <section id='hero'>
      <div className=' w-full h-screen flex items-center justify-between container-lg pt-[5vw] pe-[5vw]'>
        <div className='w-[45%] flex flex-col gap-[2vw] flex-wrap'>
          <h1 className='heading-1 leading-[1.2] flex gap-[0.5vw] headinganim '>
            <span>{slidesData[activeIndex].title}
              <span className='blue-text ml-[0.8vw]'>{slidesData[activeIndex].subtitle}</span>
            </span>
          </h1>
          <p data-para-anim className='content w-[75%] tracking-wide'>
            {slidesData[activeIndex].description}
          </p>
          <PrimaryButton href="#" text="View Case Study" className='fadeup'/>
        </div>

        <div className='w-[42%] h-[35vw]'>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            spaceBetween={30}
            loop={true}
            modules={[EffectCards]}
            className='caseStudySwiper w-full h-full'
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            cardsEffect={{
              perSlideRotate: "0",}}
          >
            <SwiperSlide ref={firstSlideRef}>
              <CaseStudyCard 
                src="/assets/images/homepage/big-basket.png" 
                no="2.35x" 
                para="Growth In Installs" 
              />
            </SwiperSlide>
            <SwiperSlide ref={secondSlideRef}>
              <CaseStudyCard 
                src="/assets/images/homepage/dominos.png" 
                no="430k+" 
                para="New Orders Within 1 Year" 
              />
            </SwiperSlide>
            <SwiperSlide ref={thirdSlideRef}>
              <CaseStudyCard 
                src="/assets/images/homepage/fly-dubai.png" 
                no="67%" 
                para="Growth in Brand Searches" 
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
