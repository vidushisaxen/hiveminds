/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Locations from '@/components/Contactpage/Locations'
import GetinTouch from '@/components/Contactpage/GetinTouch'

import Hero from '@/components/Hero'
import img from '../../public/assets/images/contactpage/contact-hero.png'
import Metadata from '@/components/Metadata'

const metadata={
  title:"Contact HiveMinds: Digital Marketing Agency Offices in India​",
  metaDescription:"Reach out to HiveMinds at our Bengaluru, Mumbai, or Gurugram offices for specialized digital marketing solutions. Call +91-8527156227 or email sales@hiveminds.in",
  path:"contact-us"
}
const contact = () => {
     headingBlur();
      paraAnim();
      fadeUp();
      fadeIn();
     
  return (
    <>
    <Metadata metadata={metadata}/>
    <Layout>
     <Hero title1={"Contact"} title2={"Us"} para={"At HiveMinds, we tackle your most challenging business problems with our specialised digital marketing approach integrating strategic expertise."} img={img}/>
     <Locations/>
     <GetinTouch/>

    </Layout>
    </>
  )
}

export default contact
