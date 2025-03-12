import BlogListing from '@/components/Blog/BlogListing'
import FeaturedBlog from '@/components/Blog/FeaturedBlog'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import img from '../../../public/assets/images/blogpage/blog-listing-hero.png'

const index = () => {
  headingBlur();
        paraAnim();
        fadeUp();
        fadeIn();
  return (
   <>
   <Layout>
    <Hero title1={"What’s"} title2={"Buzzing"} para={"Leveraging data-driven insights and technical expertise, HiveMinds crafts SEO solutions that elevate digital visibility and drive measurable results, turning organic searches into valuable customer relationships."} img={img} />
    <FeaturedBlog/>
    <BlogListing/>
   </Layout>
   
   </>
  )
}

export default index;