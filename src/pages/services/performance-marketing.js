/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/performance-marketing.png'
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
       <Hero title1={"Performance "} title2={"Marketing "} para={"Performance marketing is the strategic catalyst that transforms digital footprints into measurable, sustainable success. To thrive, a brand needs to harness data and creativity to optimize the entire customer journey—from discovery to loyalty; thats where our expertise comes to deliver the same to brands."} img={img}/>
       <Overview title1={"Scale efficiently with data-first, performance-driven  "} title2={"ad campaigns"} para={"In today’s competitive landscape, achieving sustainable business growth requires a strategic and efficient approach to paid marketing. We prioritize a data-first methodology, ensuring that marketing budget is allocated to high-impact media channels. Our integrated growth framework aligns paid efforts with broader business objectives, creating a seamless connection between          customer acquisition and long-term brand scaling. <br/> <br/> Embrace a holistic approach that optimizes acquisition, conversion, and retention through precision targeting. This is an opportunity to turn data into action and drive exceptional ROI."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%]  '>
          <SubServices heading={"Driving Performance Through Smart Advertising"} para={"We achieve the above through our comprehensive suite of solutions covers every critical digital touchpoint:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact title1={"Drive Results with"} title2={"Precision!"} para={"Maximize conversions and revenue with data-driven performance marketing. Let’s craft winning campaigns tailored to your business goals—Get in touch today!"}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"App-Based Campaigns",
    content:"AI-driven marketing strategies to maximize app installs and user engagement for long-term growth."
  },
  {
    title:"Lead Generation",
    content:"Advanced analytics and hyper-targeted campaigns to attract, nurture, and convert high-quality leads into customers."
  },
  {
    title:"Search & Social Ads",
    content:"Performance-driven campaigns across Google, Meta, and emerging platforms to amplify reach and engagement."
  },
  {
    title:"PMax & Shopping Ads",
    content:"AI-powered Google PMax and shopping ads optimized for visibility, conversions, and ROAS."
  },
  {
    title:"YouTube Advertising",
    content:"Video-first strategies that capture attention and drive brand recall with immersive storytelling."
  },
  {
    title:"App Growth Strategies",
    content:"Data-led acquisition and retention tactics to enhance app user lifetime value."
  },
  {
    title:"Hyperlocal Campaigns",
    content:"Location-based targeting to drive foot traffic and sales with precise audience segmentation."
  },
  {
    title:"Analytics & Reporting",
    content:"Real-time performance tracking and in-depth insights to fine-tune marketing strategies."
  },
  {
    title:"Analytics & Tracking Setup",
    content:"Seamless integration of tracking tools to ensure accurate attribution and campaign optimization."
  },
]