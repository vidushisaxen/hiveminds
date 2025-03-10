import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import img from '../../public/assets/images/schoolofdigital/school-of-digital-hero.png'
import Offer from '@/components/SchoolOfDigital/Offer';
import Benefit from '@/components/SchoolOfDigital/Benefit';
import Tools from '@/components/SchoolOfDigital/Tools';
import Brochure from '@/components/SchoolOfDigital/Brochure';
import Testimonials from '@/components/SchoolOfDigital/Testimonials';
import Join from '@/components/SchoolOfDigital/Join';


const schoolOfDigital = () => {
     headingBlur();
      paraAnim();
      fadeUp();
      fadeIn();
      lineAnim();
  return (
   <Layout>
       <Hero title1={"School of "} title2={"Digital"} para={"SEO is vastly interdisciplinary and it requires skills ranging from coding to linguistics to production. It includes services such as Influencer Marketing and Organic Social Media Management."} img={img} />
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