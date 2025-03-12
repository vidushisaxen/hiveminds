/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'

import Contact from '@/components/ServiceDetail/Contact'
import img from '../../../public/assets/images/services/affiliate-marketing.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'

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
       <Hero title1={"Amplify Growth Through"} title2={"Affiliates "} para={"Affiliate Marketing services forge strategic partnerships that expand your brand’s digital reach. By converting clicks into customers, these solutions drive targeted traffic and create meaningful, revenue-generating relationships."} img={img}/>
       <Overview title1={"Maximize Impact with Strategic"} title2={"Affiliate Analytics"} para={"To unlock new revenue streams, your brand must adopt a collaborative approach. Focus on building strong partnerships, integrating influencer and social media efforts, and continuously refining your campaigns using data-backed insights. Align your affiliate initiatives with your broader business objectives, leverage performance analytics, and build strategic partnerships to transform your digital presence and drive sustained growth."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] '>
          <SubServices heading={"Our Affiliate Growth Engine"} para={"Our comprehensive suite of affiliate marketing solutions empowers your brand’s growth through performance-driven partnerships:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Ready to Accelerate"} title2={"Revenue?"} para={"Unlock the power of strategic partnerships—connect with us for tailored affiliate marketing that drives measurable revenue and lasting brand impact."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Affiliate Strategy & Planning",
    content:"Develop a customized roadmap for affiliate success."
  },
  {
    title:"Partner Onboarding & Management",
    content:"Seamlessly integrate high-potential affiliates into your ecosystem."
  },
  {
    title:"Creative Campaign Integration",
    content:"Co-create compelling content that aligns with your brand’s voice."
  },
  {
    title:"Multi-Channel Synergy",
    content:"Align affiliate efforts with your overall digital marketing strategy."
  },
  {
    title:"Performance Tracking & Optimization",
    content:"Utilize advanced analytics to track performance and optimize campaigns in real-time."
  },
  {
    title:"Commission Structures & Incentives",
    content:"Design competitive, flexible commission models to drive affiliate motivation and performance."
  },
]