/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';


const industry = () => {
     headingBlur();
      paraAnim();
      fadeUp();
      fadeIn();
  return (
    <>
    <Layout>
    <Hero />
    </Layout>
    </>
  )
}

export default industry
