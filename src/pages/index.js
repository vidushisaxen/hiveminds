import Layout from '@/components/Layout'
import Hero from '@/components/Homepage/Hero'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import CaseStudies from '@/components/Homepage/CaseStudies'
import Clients from '@/components/Homepage/Clients'
import Contact from '@/components/Homepage/Contact'
import Services from '@/components/Homepage/Services'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'

import React from 'react'

const index = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  return (
    <>
      <Layout>
        <Hero />
        <Story />
        <Services />
        <Clients />
        <TeamMembers />
        <div className='relative h-full w-screen rounded-[20px] '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudies />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <Blogs />
        </div>
        <Contact />
      </Layout>
    </>
  )
}

export default index;