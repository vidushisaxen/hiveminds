/* eslint-disable react-hooks/rules-of-hooks */
import Hero from '@/components/Contactpage/Hero'
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Locations from '@/components/Contactpage/Locations'
import GetinTouch from '@/components/Contactpage/GetinTouch'
import gsap from 'gsap'

const contact = () => {
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
    },[])
  return (
    <>
    <Layout>
     <Hero/>
     <Locations/>
     <GetinTouch/>

    </Layout>
    </>
  )
}

export default contact
