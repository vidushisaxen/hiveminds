/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import gsap from 'gsap'
import Hero from '@/components/Hero'
import Leadership from '@/components/AboutUs/Leadership'

const contact = () => {
     headingBlur();
      paraAnim();
      fadeUp();
      fadeIn();
      useEffect(() => {
        gsap.to(".blue-hexagon-animation", {
          y: "15px",
          duration: 2,
          repeat: -1, 
          yoyo: true, 
          ease: "sine.inOut", 
        });
    
        gsap.to(".yellow-hexagon-animation", {
          y: "-15px",
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
    },[])
  return (
    <>
    <Layout>
     <Hero title1={"Who We"} title2={"Are"} para={"We are HiveMinds—a digital marketing agency where innovative strategies, creative insights, and data-driven solutions converge to transform brands and elevate customer experiences."} img={"/assets/images/about/about-hero.png"}/>
     <Leadership/>
    </Layout>
    </>
  )
}

export default contact
