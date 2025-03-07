/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Contact from '@/components/ServiceDetail/Contact'
import img from '../../../public//assets/images/services/data-and-analytics.png'

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
       <Hero title1={"Data Analytic"} title2={"Services "} para={"Data is the foundation of every successful digital strategy. Our data analysis solutions transform raw numbers into powerful business intelligence, enabling brands to make informed decisions, optimize marketing performance, and unlock new growth opportunities."} img={img}/>
       <Overview title1={"Turn Insights into Action with"} title2={"Precision Analytics"} para={"In today’s fast-paced digital landscape, brands that leverage data-driven decision-making gain a competitive edge. Expertise in predictive modeling, consumer behavior analysis, and real-time reporting ensures that every marketing initiative is backed by deep, actionable insights."}/>
       <div className='relative h-full w-screen rounded-[20px]  '>
          <SubServices heading={"Our Data Solutions Power Business Success"} para={"Our suite of data-driven services helps brands maximize efficiency and impact:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Unlock actionable insights"} title2={"today."} para={"Leverage our expert analytics to drive smarter decisions and sustainable growth. Connect with us today to unlock your data's potential."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Product Consulting Tools",
    content:"Utilize advanced tools like FeedX, Vizual, OptiMMMix, ADH, BidSmart, and Lead Scoring to optimize product performance and drive informed decisions."
  },
  {
    title:"Business Intelligence",
    content:"Develop custom BI dashboards with Hamuli and leverage sentiment analysis via HivePulse to gain real-time insights for strategic decision-making."
  },
  {
    title:"Integrated Platforms",
    content:"Deploy Nucleus for seamless integration and efficient management of diverse analytics tools, streamlining data flow and enhancing operational agility."
  },
  {
    title:"Additional Capabilities",
    content:"Custom data product development, robust MIS solutions, and ad-hoc statistical analysis—including image processing and OLAP web applications—drive analytics."
  },
  {
    title:"Data Governance & Security",
    content:"Implement robust data governance and security protocols to ensure compliance, protect sensitive information, and maintain integrity across analytics operations."
  },
  {
    title:"Predictive Analytics & Modeling",
    content:"Utilize advanced algorithms for predictive modeling and trend analysis, enabling proactive decision-making and forecasting to drive forward-looking strategies."
  },
]