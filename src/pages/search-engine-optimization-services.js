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
       <Hero title1={"Search Engine"} title2={"Optimisation "} para={""}/>
       <Overview title1={"What"} title2={" SEO Is :"} para={"SEO is the strategic catalyst that transforms your digital presence into a sustainable growth engine. By leveraging technical excellence, compelling content, and authoritative link building, your brand becomes the go-to choice when customers search online."}/>
       <div className='relative h-full w-screen'>
          <SubServices heading={"Customize Your SEO Strategy"} para={"Maximize your online impact with our comprehensive suite of SEO solutions, each designed to enhance a crucial element of your digital presence:"} subservices={subservices}/>
          {/* <span className='absolute h-[20%] bottom-[30%] w-full'></span> */}
        <CaseStudies/>
        </div>
       <Contact title1={"Boost Rankings, Drive "} title2={" Growth!"} para={"Enhance your visibility and dominate search results with our expert-driven SEO solutions. Let’s optimize your digital success—connect with us today!"}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Technical SEO Audits",
    content:"Uncover hidden site issues and enhance performance through deep technical analysis and structured optimization."
  },
  {
    title:"Content Strategy & Creation",
    content:"Crafting compelling, SEO-driven content that engages users and strengthens search rankings."
  },
  {
    title:"Link Building & Authority Development",
    content:"Strategic backlinking to establish credibility, trust, and better rankings."
  },
  {
    title:"Local & International SEO",
    content:"Optimizing for hyper-local relevance and global search dominance."
  },
  {
    title:"Analytics & Reporting",
    content:"Data-backed insights to measure performance and refine strategies."
  },
  {
    title:"App SEO",
    content:"Enhancing discoverability for apps across search engines and app stores."
  },
  {
    title:"On-Website & Off-Wesite Optimization",
    content:"Data-backed insights to measure performance and refine strategies."
  },
]