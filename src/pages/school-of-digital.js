import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Layout from '@/components/Layout';
import Offer from '@/components/SchoolOfDigital/Offer';
import Benefit from '@/components/SchoolOfDigital/Benefit';
import Tools from '@/components/SchoolOfDigital/Tools';
import Brochure from '@/components/SchoolOfDigital/Brochure';
import Testimonials from '@/components/SchoolOfDigital/Testimonials';
import Join from '@/components/SchoolOfDigital/Join';
import Hero from '@/components/SchoolOfDigital/Hero';


const schoolOfDigital = () => {
     headingBlur();
      paraAnim();
      fadeUp();
      fadeIn();
      lineAnim();
  return (
   <Layout>
       <Hero/>
       <Offer/>
       <Benefit/>
       <Tools/>
       <Brochure/>
       <Testimonials/>
       <Join/>
    </Layout>
  )
}

export default schoolOfDigital;