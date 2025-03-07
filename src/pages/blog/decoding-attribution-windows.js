/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"June 6,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> No matter the size of budgets or the experience of marketers in optimizing campaigns efficiently and making deeply thought-through media plans, determining the optimum length of the attribution window for a business is often a challenge. </p>",
      "<p class='content'>Different channels having different default windows don’t make it any easier. For example, Google defaults to a 30-day window, while Facebook's default is 7-day.</p>",
      "<p class='content'>Many marketers find themselves suffering from analysis paralysis on this issue and let the default attribution windows continue as the status quo.</p>",
      "<p class='content'>But if Google defaults to 30-day and Facebook to 7-day, is it fair to compare them in terms of performance?</p>",
      "<p class='content'>Most marketers label Google campaigns as ‘higher intent’ campaigns and use Facebook's reputation for lower intent to justify the channel’s relatively poor efficiency. But is this the right approach?</p>",
      "<p class='content'>To understand this, let’s first try to answer this question:</p>"

  ],
  content2:[
    "<p class='text-[2.5vw]'>How do you select the right attribution window?</p>",
      "<p class='content'> There are multiple considerations you need to keep in mind while selecting the length of attribution windows: </p>",
      "<p class='text-[2.5vw]'>A. How long is my business’s gestation period?</p>",
      "<p class='content'>The gestation period has a significant impact on attribution windows. For instance, a car dealership takes 45-60 days to convert a high-intent lead to a purchase, whereas most e-commerce purchases happen within the first three days of an ad click.</p>",
      "<p class='content'>It also depends on how much you want ad channels to track. An e-commerce business can track the complete user journey online down to the purchase, but a car dealership can’t because test drives and purchases happen offline. Therefore, setting up campaigns to bid for the closest online-tracked event and optimizing manually or through server-to-server integration for deep funnel events becomes necessary.</p>",
      "<p class='content'>Now, let’s discuss businesses with short gestation periods, like e-commerce.</p>",
      "<p class='content'>Most marketers feel comfortable with longer attribution windows, thinking they are safer since most events can be attributed back to the campaign. However, more isn't always merrier.</p>",
      "<p class='content'>For example, although you may continue to get backfills until the window is complete, around 80% of your purchases may come within the first 7-10 days of users being exposed to your ads.</p>",
      "<p class='content'>So, reducing the window can train the algorithms to optimize harder and improve the quality of traffic. I've seen multiple case studies where reducing the attribution windows improved performance. However, this should be done mindfully and gradually since campaigns take time to adjust, and squeezing the window too much can drag down campaigns.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>B. Do I trust a particular channel to give it a shorter attribution frame? Does it even help?</p>",
      "<p class='content'>Marketers often have channel preferences, and affiliates and partnerships are usually looked at with caution due to concerns about fraud activities.</p>",
      "<p class='content'>Although we are seasoned at catching affiliate frauds efficiently, some clients ask us to set shorter attribution windows for affiliate partners. However, drastically reducing the attribution window for any channel is more detrimental than good for business.</p>",
      "<p class='content'>Reducing fraud by drastically reducing attribution windows is like hitting your head on the wall to cure a headache. Instead, it’s important to use other fraud detection practices and tools to address this issue.</p>",
  ],
  content3:[
    "<p class='text-[2.5vw]'>C. How would I manage different attribution windows of different channels? And how do I report these numbers?</p>",
      "<p class='content'> Each channel may have its limitations, but the idea is to set them as close to the gestation period as possible. For example, setting up a 7-day window on Facebook and 14 days on Google could be reasonable.</p>",
      "<p class='content'>However, it’s essential to be mindful of how critically you judge a channel. Mature brands usually have normalization measures in their reports to give channels sufficient attribution.</p>",
      "<p class='content'>In conclusion, selecting the right attribution window requires a deep understanding of your business’s gestation period, trust in each channel's attribution frame, and careful management of different attribution windows across channels. It’s not just about choosing the default; it’s about tailoring the window to fit your business's unique needs.</p>",
  ]
}
const blogDetail = () => {
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();
  return (
    <>
      <Layout>
        <Hero title1={"Decoding Attribution Windows: "} title2={"Finding the Perfect Fit for Your Marketing Strategy"} para={"Discover how attribution windows shape your marketing efforts. This blog unpacks various models and their impact on campaign performance, offering actionable insights to optimize budgets and boost ROI with a strategy tailored to your unique business needs."} img={"/assets/images/blogs/blog-detail-hero.png"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

