/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Hero from '@/components/Homepage/Hero'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import CaseStudies from '@/components/Homepage/CaseStudies'
import Contact from '@/components/Homepage/Contact'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import Services2 from '@/components/Homepage/Services2'
import { Clients2 } from '@/components/Homepage/Clients2'

const index = () => {
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
      <Layout>
        <Hero />
        <Story />
        <Services2/>
       <Clients2/>
        <TeamMembers />
        <div className='relative h-full w-screen rounded-[20px] '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudies />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <Blogs />
        </div>
        <Contact />
      </Layout>
    </>
  )
}

export default index;