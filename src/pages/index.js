import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import CaseStudies from '@/components/Homepage/CaseStudies'
import Clients from '@/components/Homepage/Clients'
import Contact from '@/components/Homepage/Contact'
import Hero from '@/components/Homepage/Hero'
import Part from '@/components/Homepage/Part'
import Services from '@/components/Homepage/Services'
import Story from '@/components/Homepage/Story'
import React from 'react'

const index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Services />
        <Clients />
        <Part />
        <div className='relative h-full w-screen rounded-[20px] bg-[#134BD6] mt-[10%] '>
          <span className=' block absolute h-[20%] bg-white w-full'></span>
          <CaseStudies />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%] bg-white w-full'></span>
          <Blogs />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default index