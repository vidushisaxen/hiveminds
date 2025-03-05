/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content= "<p class='content py-[1vw] fadein'>Different channels having different default windows don’t make it any easier. For example, Google defaults to a 30-day window, while Facebook's default is 7-day.</p> <p class='content py-[1vw] fadein'>Many marketers find themselves suffering from analysis paralysis on this issue and let the default attribution windows continue as the status quo.</p> <p class='content py-[1vw] fadein'>But if Google defaults to 30-day and Facebook to 7-day, is it fair to compare them in terms of performance?</p> <p class='content py-[1vw] fadein'>Most marketers label Google campaigns as ‘higher intent’ campaigns and use Facebook's reputation for lower intent to justify the channel’s relatively poor efficiency. But is this the right approach?</p> <p class='content py-[1vw] fadein'>To understand this, let’s first try to answer this question:</p> <p class='text-[2.5vw] font-medium fadein'>How do you select the right attribution window?</p>";

const blogDetail = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  return (
    <>
      <Layout>
        <Hero title1={"Decoding Attribution Windows: "} title2={"Finding the Perfect Fit for Your Marketing Strategy"} para={"No matter the size of budgets or the experience of marketers in optimizing campaigns efficiently and making deeply thought-through media plans, determining the optimum length of the attribution window for a business is often a challenge."} img={"/assets/images/blogs/blog-detail-hero.png"} category={" Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

