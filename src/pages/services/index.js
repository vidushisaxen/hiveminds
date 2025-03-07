/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Listing from '@/components/Services/Listing'
import Hero from '@/components/Hero'
import img from '../../../public/assets/images/services/hero.png'

const index = () => {
  const [isOpen, setIsOpen] =  useState(false);
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
  }, []);
  return (
    <>
      <Layout isOpen={isOpen}>
        <Hero
          title1={"What We"} 
          title2={"Offer"} 
          para={"Fueling digital evolution with insight and innovation, we turn complexity into clarity—empowering brands to lead and excel in today’s competitive landscape."} 
          img={img} 
        />
        <Listing/>
      </Layout>
    </>
  )
}

export default index;