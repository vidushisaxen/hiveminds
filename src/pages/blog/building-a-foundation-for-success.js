/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"December 6,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> Jyothirmayee JT, Founder and CEO of HiveMinds Innovative Market Solutions, radiated gratitude as she received her award for being among IMPACT’s Top 50 Most Influential Women of 2024.</p>",
      "<p class='content'>JReflecting on her journey and offering wisdom to aspiring women, she said, “I’m very elated to receive this award, and it’s an honor to stand here for the second time.” </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw]'/>",
  ],
  content2:[
      "<p class='content'> Jyothirmayee acknowledged the pivotal role played by publisher partners and clients in pushing the team to constantly innovate and excel in the ever-evolving digital landscape. &nbsp;</p>",
      "<p class='content'>She also spoke candidly about the challenges women face in balancing professional and personal lives. “When Sam ( Madison World Chairman Sam Balsara) said we want the next wave of aspiring women to bring their brilliance to this industry, I couldn’t agree more. But to do that, women need to take control of their daily routines,” she said. </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw]'/>",
      "<p class='content'>Addressing young professionals, Jyothirmayee emphasized the need for discipline and proactive planning. “We cannot give ourselves excuses for missing important meetings or being unprepared. If you’re pressed for time, find ways to create it—hire a maid, a cook, a driver, or choose a great playschool for your kids. Make it happen.”  </p>",
      "<p class='content'>She urged women to invest in a robust support system, enabling them to focus on their careers without guilt or compromise. “This might sound simple, but it’s impactful. It’s about taking control of your time and building a foundation that allows you to thrive.”  </p>"
  ],
  content3:[
      "<p class='content'> In her closing remarks, she thanked her clients, partners, colleagues, and friend for their unwavering support. </p>",
      "<p class='content'>“Together, we are shaping the future of this industry,” she said.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw]'/>",
      "<p class='content'>Highlighting the importance of having a reliable support system, Jyothirmayee gave a heartfelt mention to her family, friends, and team. “Each one of them has contributed to my ability to focus and excel in my career,” she said.</p>",
      "<p class='content'>Extending her gratitude for recognizing women leaders and celebrating their contributions to the media and marketing industry, Jyothirmayee also reflected on a momentous week for HiveMinds, which recently celebrated its 14th anniversary.&nbsp;</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw]'/>",
      "<p class='content'>“It has been a week of celebrations,” she said, proudly recounting the company's recent wins. “It’s been a wonderful journey in the media industry, and I couldn’t have done this without the incredible team at HiveMinds,” she said. </p>"
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
        <Hero title1={"Building a Foundation for Success: "} title2={"Insights from Jyothirmayee"} para={"Jyothirmayee JT emphasizes that building a strong foundation is essential for marketing success. In the article, she explains how strategic planning, innovation, and robust infrastructure combine to create value-driven frameworks that empower brands to excel in competitive markets and drive enduring, measurable results."} img={"/assets/images/blogs/building-foundation.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

