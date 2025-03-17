/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import Hero from '@/components/ServiceDetail/Hero'
import Overview from '@/components/ServiceDetail/Overview'
import SubServices from '@/components/ServiceDetail/SubServices'
import Contact from '@/components/Homepage/Contact'
import img from '../../../public/assets/images/services/programatic-advertising.png'
import CaseStudies from '@/components/ServiceDetail/CaseStudies'
import Metadata from '@/components/Metadata'


const metadata={
  title:"Social Media Marketing Services | HiveMinds",
  metaDescription:"Grow your brand with HiveMinds' social media marketing. We create data-driven strategies and engaging content to boost reach, engagement, and conversions.",
  path:"services/social-media-marketing"
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
       <Hero title1={"Social Media Marketing "} title2={"Services"} para={"Social media marketing is the strategic accelerator that transforms everyday interactions into immersive brand experiences. By leveraging data-driven insights and creative storytelling, your brand builds authentic connections that cut through the noise and drive sustainable growth."} img={img}/>
       <Overview title1={"Scale Efficiently with Data-First  "} title2={"Social Media Strategies"} para={"To excel on social platforms, brands must actively engage its audience across digital channels. Embrace a proactive, audience-first approach—delivering compelling content, fostering genuine interactions, and continuously refining your strategy—to build loyalty, boost conversions, and drive measurable results."}/>
       <div className='relative h-full w-screen rounded-[20px] mobile:bg-primary mobile:pb-[10%] tablet:bg-primary tablet:pb-[10%]'>
          <SubServices heading={"Our Social Engagement Arsenal"} para={"Our suite of social media services empowers your brand to maximize its digital impact:"} subservices={subservices}/>
          <span className='absolute h-[20%] bottom-[30%] w-full'></span>
        <CaseStudies/>
        </div>
       <Contact  title1={"Transform your social "} title2={"presence"} para={"Connect with us now for creative engagement and measurable digital success."}/>
      </Layout>
    </>
  )
}

export default index;


const subservices = [
  {
    title:"Social Media Content Creation",
    content:"From striking visuals to persuasive copy, we develop content that transforms platforms into powerful brand storytellers."
  },
  {
    title:"Influencer Marketing",
    content:"Our influencer partnerships amplify your message through influential voices that foster genuine connections with your audience."
  },
  {
    title:"Social Boosting & Retargeting",
    content:"We use targeted boosting and retargeting to re-engage potential customers, ensuring your message resonates at every stage."
  },
  {
    title:"Social Listening & Analytics",
    content:"Harnessing social analytics, we uncover valuable insights to refine strategies and deepen your audience connection."
  },
  {
    title:"Video Production & Multimedia Campaigns",
    content:"Our video services transform ideas into dynamic visual narratives that captivate and elevate your brand message."
  },
  {
    title:"Community Management & Engagement",
    content:"We nurture vibrant social communities by fostering timely interactions and building loyalty among your audience."
  },
]