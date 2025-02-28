/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import gsap from 'gsap'
import Hero from '@/components/OurImpact/Hero'
import { Clients } from '@/components/OurImpact/Clients'
import CaseStudies from '@/components/OurImpact/CaseStudies'

const impact = () => {
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
    <Clients/>
    <CaseStudies/>
    </Layout>
    </>
  )
}

export default impact
