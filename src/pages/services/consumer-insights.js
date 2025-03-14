/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/consumer-insights.png'
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
       <Hero title1={"Consumer Insights"} title2={"Services "} para={"Consumer Insights are the strategic cornerstone for sustainable growth. We transform complex consumer data into actionable intelligence, empowering your brand to make informed decisions that drive innovation and lasting impact."} img={img}/>
       <Overview title1={"Scale Efficiently with Data-First"} title2={"Consumer Insights"} para={"Truly understanding your audience is essential. Leverage advanced analytics and market research to uncover hidden trends, untapped opportunities, and evolving consumer preferences. By harnessing these insights, you can tailor your messaging and product offerings to exceed customer expectations and achieve sustainable growth."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%] '>
          <SubServices heading={"Unlock Insights, Unleash Growth"} para={"Our comprehensive suite of consumer insights services empowers your brand to transform raw data into strategic advantage:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Drive Growth with"} title2={"Data!"} para={"Unlock powerful consumer insights to transform your brand. Connect with us today and harness data-driven strategies for measurable, sustainable success."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Market Research & Consumer Analysis",
    content:"Transform raw data into actionable insights by analyzing consumer behavior and market trends for smarter decision-making."
  },
  {
    title:"Competitor & Category Benchmarking",
    content:"Compare industry benchmarks and competitors to pinpoint strengths, weaknesses, and growth opportunities."
  },
  {
    title:"Full Funnel Strategy Development",
    content:"Craft comprehensive strategies guiding customers from awareness through retention, ensuring engagement at every stage."
  },
  {
    title:"Data-Driven Attribution & Optimization",
    content:"Implement precise attribution models and continuous optimization to convert performance data into actionable insights."
  },
  {
    title:"Creative Communication & Content Strategy",
    content:"Merge creative storytelling with data insights to develop compelling content that resonates with your audience."
  },
  {
    title:"Customer Segmentation & Persona Development",
    content:"Develop targeted segments and detailed personas to tailor messaging for optimal relevance and increased conversions."
  },
]