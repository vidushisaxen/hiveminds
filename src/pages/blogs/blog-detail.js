/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';


const blogDetail = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  return (
    <>
      <Layout>
        <Hero title1={"How to Setup Google Business Profile for Better Online"} title2={"Presence in 2023"} para={"Discover the lucrative opportunities of a SEO job and learn how to excel in this dynamic industry. Explore career opportunities and essential skills. Discover the lucrative opportunities of a SEO job and learn how to excel in this dynamic industry. Explore career opportunities and essential skills."} img={"/assets/images/industry/industry-hero.png"} />
      </Layout>
    </>
  )
}

export default blogDetail

