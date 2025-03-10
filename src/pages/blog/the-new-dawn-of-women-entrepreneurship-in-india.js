/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"March 8,2019",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> The sixth economic census released by MoSPI, women constitute around 14% of the total entrepreneurship in India. Although there is a long way to go yet the growing statistics favouring women strength in the business world is boosting the morale of Indian women.</p>",
      "<p class='content'>A movement needs strong role models and stories to be told. We even have global women leaders who are from India, be it Indira Nooyi, Ziya Modi, or Kiran Mazumdar-Shaw. Last decade we saw the banking sector dominated by women at the top. Women are in the news every day, ruling all segments of industry and all facets of life. This makes a positive impact on self-belief, confidence, and aspiration of other women. The Venture Capital are also further supporting the gender diversity amongst entrepreneurs, we even have seen a rise of women angels and investors. And at the right time, we are able to build a strong support platform for women, buy-in from policymakers and more importantly mentorship and support from the ones who are already successful. A 2015 study by McKinsey has shown that with equal participation of women in the economy, India’s GDP can rise by 16-60% by 2025, which means an addition of $2.9 trillion to the Indian economy.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>The challenges women entrepreneurs face in India </p>",
      "<p class='content'> Mentorship is still the biggest challenge faced by Indian women entrepreneurs. Men tend to network better, mingle faster – whether it is at an event or an investor meeting, they seek help and information more freely. Women need to continue to improve the support system and strengthen themselves. WeConnect, GHC, HerStory, Sheroes, and many other organizations are helping on this front. There are other challenges which women entrepreneurs can overcome on their own. It could be family support, child-care, inhibitions towards travel, networking & other. One of the most discussed challenges is the gender bias at critical junctures in entrepreneurship journey – co-founders, putting up a team, raising funds. It is essential for women to make it explicit as there are assumptions being made – we need to strongly communicate how we are equally invested & well prepared for the arduous journey as an entrepreneur.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Second innings for women entrepreneurs after their sabbatical break</p>",
      "<p class='content'>India is still a male-dominated society. Clarity in terms of personal life is a huge inhibition for many women to start an entrepreneurial journey. Nobody wants their dreams crushed. To be certain of the support system post marriage or with childbirth becomes very essential. There is another angle in which this is being influenced. Many women are finding it hard to get back to work after their break. This largely has to do with employers not believing in their skills not being rusted and their time commitments etc. Many self-confident women do not want to worry about their future in the hands of such uncertainties and are embarking on business journeys and defining their paths on their own. The wave has certainly changed and women are becoming stronger in their second innings in the business world as well.</p>",
      "<p class='content'>Naturally, women are more resilient, they have larger determination, they are diligent and most likely they have a natural talent to grow, nurture and to lead. Women are born entrepreneurs. All women entrepreneurs must stop heeding to discouraging comments on how they will manage family or child along with a startup. For us, women entrepreneurs and businesswomen, it is how we plan things around all responsibilities and dependencies. Everything is possible; it is all about our grit and determination.</p>"
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Becoming a successful women entrepreneur</p>",
      "<p class='content'> It is exhilarating, empowering and liberating. The most common scene is you find yourself in a room full of men and you are still strongly making your case and are treated as an equal and not just special. As women, we can hire more women, support them at the workplace with the necessary support and empower them. This is the time to create a strong bond and show solidarity because once she gets the true sisterhood, nothing can stop her from achieving success in life. Nothing is impossible, it’s just un-possible.</p>",
     
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
        <Hero title1={"The New Dawn: "} title2={"Women Entrepreneurship in India"} para={"India's entrepreneurial landscape is being redefined by dynamic women leaders. It chronicles success stories, challenges, and policy shifts, illustrating a vibrant ecosystem where determination, innovation, and collaborative support empower women to pioneer business ventures and inspire generations."} img={"/assets/images/blogs/women-entrepreneurship.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

