import { headingBlur, paraAnim } from '@/components/gsapAnimations';
import About from '@/components/HomeCopy/About';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import CaseStudies from '@/components/HomeCopy/CaseStudies';
import Expertise from '@/components/HomeCopy/Expertise';
import Hero from '@/components/HomeCopy/Hero'
import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image';
import Clients from '@/components/HomeCopy/Clients';
import Certification from '@/components/HomeCopy/Certification';
import Blogs from '@/components/HomeCopy/Blogs';


const practice = () => {
     headingBlur();
     paraAnim()
  return (
    <>
    <Cursor isGelly={true} cursorSize={0.1} />
    <Hero/>
    <About/>
    <CaseStudies/>
    <Expertise/>
    <div className='w-screen h-[50vw] bg-[#1359F0] rounded-tl-[5vw] rounded-tr-[5vw] mt-[5%] overflow-hidden relative z-[1]'>
      <div className='absolute top-0 left-0 w-screen'>

      <Image src={"/assets/images/homeCopy/clients-behind.png"} width={1920} height={1080} className='object-cover w-full h-full'/>
      </div>
      <Clients/>
       
    </div>
    <Certification/>
    <Blogs/>
    {/* <My3DGrid/> */}

    </>
  )
}

export default practice
