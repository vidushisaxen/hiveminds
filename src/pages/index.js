/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Hero from '@/components/Homepage/Hero'
import Contact from '@/components/Homepage/Contact'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import CaseStudies from '@/components/Homepage/CaseStudies'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { Clients2 } from '@/components/Homepage/Clients2'
import Services from '@/components/Homepage/Solutions'
import MobileHero from '@/components/Homepage/MobileHero'

const index = () => {
  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();

  useEffect(() => {
    gsap.to(".blue-hexagon-animation", {
      y: "15px", // Move up & down
      duration: 2,
      repeat: -1, // Infinite loop
      yoyo: true, // Smooth back-and-forth motion
      ease: "sine.inOut", // Smooth ease
    });

    gsap.to(".yellow-hexagon-animation", {
      y: "-15px", // Move opposite direction
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <>
      <Layout isOpen={isOpen}>
        {!mobileWidth ? <Hero /> : <MobileHero />}
        <Story isOpen={isOpen} setIsOpen={setIsOpen} />
        <Services />
        <Clients2 />
        <TeamMembers />
        <div className='relative h-fit w-screen rounded-[20px]  '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudies />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <Blogs />
        </div>
        <Contact title1={"Looking to Drive "} title2={"Growth?"} para={"We’re passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us."} />
      </Layout>
    </>
  )
}

export default index;