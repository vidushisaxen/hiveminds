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
      "<p class='content'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>",
      "<p>when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>",
      "<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Lorem Ipsum Dolor</p>",
      "<p class='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>"

  ],
  content2:[
    "<p class='text-[2.5vw]'>Lorem Ipsum is simply dummy text </p>",
      "<p class='content'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>",
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Lorem Ipsum is simply dummy text </p>",
      "<p class='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
  ],
  content3:[
    "<p class='text-[2.5vw]'>Lorem Ipsum is simply dummy text </p>",
      "<p class='content'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>",
      "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Lorem Ipsum is simply dummy text </p>",
      "<p class='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>",
      "<p class='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Lorem Ipsum</p>",
      "<p class='content'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>"
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
        <Hero title1={"Indian Social Media: "} title2={"Case Studies"} para={"This curated collection of Indian social media case studies reveals how brands are revolutionizing engagement. By leveraging creative storytelling, strategic targeting, and robust analytics, these case studies offer actionable insights into transforming digital content into powerful, measurable growth engines."} img={"/assets/images/blogs/indian-social-media.jpg"} category={"Social Media Management"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

