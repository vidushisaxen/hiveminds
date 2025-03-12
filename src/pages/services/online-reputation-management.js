/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/online-reputation-management.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'

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
       <Hero title1={"Your Reputation , Our"} title2={"Priority "} para={"An ORM service acts as a vigilant guardian for your brand, ensuring every customer interaction not only safeguards your image but also builds lasting trust. It’s about transforming every piece of feedback into an opportunity to strengthen your reputation"} img={img}/>
       <Overview title1={"Drive Trust with"} title2={"ORM"} para={"To protect and enhance a brand's image, you must be proactive and responsive. Focus on continuously monitoring your online presence, engaging with your audience, and turning customer feedback into actionable strategies. This approach not only mitigates risks but also builds enduring customer loyalty in today’s competitive digital landscape."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] '>
          <SubServices heading={"Our ORM Strategic Framework"} para={"Empower your brand with our comprehensive ORM solutions designed to protect and elevate your reputation:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Ready to protect your"} title2={" brand?"} para={"Secure your reputation and build lasting trust with proactive ORM solutions. Reach out today to safeguard your brand's future now."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Comprehensive Social Listening",
    content:"Monitor every mention across platforms to capture real-time consumer sentiment and stay ahead of potential issues."
  },
  {
    title:"Review Response & Management",
    content:"Engage promptly with customers to foster loyalty, address concerns, and build trust."
  },
  {
    title:"Crisis Communication",
    content:"Navigate and neutralize potential brand crises swiftly to safeguard your image and maintain customer confidence."
  },
  {
    title:"Sentiment & Trend Analysis",
    content:"Extract actionable insights from customer feedback to continuously refine and enhance your reputation strategy."
  },
  {
    title:"Reputation Strategy Consulting",
    content:"Develop long-term plans that ensure a robust and resilient online image, aligning your brand’s values with customer expectations."
  },
  {
    title:"Competitor Reputation Benchmarking",
    content:"Analyze competitor strategies to identify opportunities for differentiation and elevate your brand positioning."
  },
]