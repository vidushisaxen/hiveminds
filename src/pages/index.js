import Footer from '@/components/Footer'
import { fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Header from '@/components/Header'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import CaseStudies from '@/components/Homepage/CaseStudies'
import Clients from '@/components/Homepage/Clients'
import Contact from '@/components/Homepage/Contact'
import Hero from '@/components/Homepage/Hero'
import Services from '@/components/Homepage/Services'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
import Loader from '@/components/Loader'

import React from 'react'

const index = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  return (
    <>
    <Loader/>
   
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <Clients />
      <TeamMembers/>
        <div className='relative h-full w-screen rounded-[20px] '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudies />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <Blogs />
        </div>
        <Contact />
      </main>
      <Footer/>
     
    </>
  )
}

export default index