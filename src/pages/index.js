import Footer from '@/components/Footer'
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
   <Header/>
   <main>
  <Hero/>
  <Story/>
  <Services/>
  <Clients/>
  <Part/>
  <CaseStudies/>
  <Awards/>
  <Blogs/>
  <Contact/>
  </main>
  <Footer/>
   </>
  )
}

export default index