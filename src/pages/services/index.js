/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/Services/Hero'
import Listing from '@/components/Services/Listing'

const index = () => {
  const [isOpen, setIsOpen] =  useState(false);
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
        <Hero/>
        <Listing/>
      </Layout>
    </>
  )
}

export default index;