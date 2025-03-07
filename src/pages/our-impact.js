/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import gsap from 'gsap'
import { Clients } from '@/components/OurImpact/Clients'
import CaseStudies from '@/components/OurImpact/CaseStudies'
import Awards from '@/components/OurImpact/Awards'
import Hero from '@/components/Hero'
import img from '../../public/assets/images/impact/our-impact-hero-img.png'

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
   <Hero title1={"Our"} title2={"Impact"} para={"Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."} img={img}/>
    <Clients/>
    <Awards/>
    <CaseStudies/>
    </Layout>
    </>
  )
}

export default impact
