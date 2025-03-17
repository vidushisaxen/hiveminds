/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
// import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/influencer-marketing.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'

const metadata={
  title:"Influencer Marketing Services | HiveMinds",
  metaDescription:"Amplify your brand's voice with HiveMinds' influencer marketing. We partner with aligned influencers to create authentic campaigns that drive engagement and growth.",
  path:"services/influencer-marketing"
}
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
    <Metadata metadata={metadata}/>
      <Layout isOpen={isOpen}>
       <Hero title1={"Influence That "} title2={"Resonates"} para={"Influencer Marketing is designed to make your brand unforgettable. By partnering with influential voices that perfectly align with your product-market fit, we ensure every campaign creates a ripple effect in the digital landscape—making your brand a standout leader."} img={img}/>
       <Overview title1={"Drive Trust with"} title2={"Influencer Approaches"} para={"To elevate your brand, you must harness the power of authentic influence. Focus on building strategic partnerships, crafting compelling narratives, and leveraging data-driven insights to drive genuine engagement and conversions. Embrace a holistic approach that transforms influencer collaborations into measurable growth and lasting brand loyalty."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Our Influencer Growth Arsenal"} para={"Empower your brand with our comprehensive suite of influencer solutions:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Experience the power of authentic  "} title2={"influence!"} para={"Partner with top influencers to amplify your brand’s voice and drive measurable engagement. Let’s elevate your influence now."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Targeted Influencer Sourcing",
    content:"Identify and engage creators who perfectly match your brand’s vision."
  },
  {
    title:"Campaign Planning & Management",
    content:"Develop end-to-end campaigns that maximize ROI with strategic execution."
  },
  {
    title:"Creative Collaboration",
    content:"Co-create compelling content that resonates with your audience and strengthens your brand narrative."
  },
  {
    title:"ROI Measurement & Analytics",
    content:"Track and analyze campaign performance to optimize every influencer collaboration."
  },
  {
    title:"Sustained Partnership Building",
    content:"Cultivate long-term relationships that drive ongoing brand advocacy and loyalty."
  },
  {
    title:"Influencer Engagement & Activation",
    content:"Activate influencer networks to spark authentic buzz and foster genuine engagement."
  },
]