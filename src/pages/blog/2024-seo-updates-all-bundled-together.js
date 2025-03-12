/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';
import SEODetails from '@/components/BlogDetail/SEODetails';

const blogDetail = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  return (
    <>
      <Layout>
        <Hero title1={"2024 SEO Updates All Bundled Together for "} title2={"You to Glance"} para={"Discover how advanced attribution models can transform your marketing strategy. This blog breaks down the process of aligning data with creative efforts, providing clear, actionable steps to optimize your campaigns, enhance ROI, and achieve sustainable growth in today’s competitive digital landscape."} img={"/assets/images/blogs/2024-seo-updates.jpg"} category={"SEO"}/>
       <SEODetails />
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

