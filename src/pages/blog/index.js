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

    <Hero title1={"What’s"} title2={"Buzzing"} para={"SEO is vastly interdisciplinary and it requires skills ranging from coding to linguistics to production. It includes services such as Influencer Marketing and Organic Social Media Management."} img={img} />
    <FeaturedBlog/>
    <BlogListing/>
   </Layout>
   
   </>
  )
}

export default index