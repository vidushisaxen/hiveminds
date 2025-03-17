/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim, lineAnim } from '@/components/gsapAnimations'
import gsap from 'gsap'
import Hero from '@/components/Hero'
import Leadership from '@/components/AboutUs/Leadership'
import WhyUs from '@/components/AboutUs/WhyUs'
import Life from '@/components/AboutUs/Life'
import Responsibility from '@/components/AboutUs/Responsibility'
import img from '../../public/assets/images/about/about-hero.png'
import Metadata from '@/components/Metadata'

const metadata={
  title:"HiveMinds: Innovating Digital Marketing with Data-Driven Solutions",
  metaDescription:"Discover how HiveMinds' leadership and collaborative culture drive innovative, data-driven digital marketing strategies for brand transformation and growth.",
  path:"about-us"
}
const contact = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim()
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
  }, [])
  return (
    <>
    <Metadata metadata={metadata}/>
      <Layout>
        <Hero title1={"Who We"} title2={"Are"} para={"We are HiveMinds—a digital marketing agency where innovative strategies, creative insights, and data-driven solutions converge to transform brands and elevate customer experiences."} img={img} />
        <Leadership />
        <WhyUs />
        <Life />
        <Responsibility />
      </Layout>
    </>
  )
}

export default contact
