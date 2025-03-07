
/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"April 5,2023",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> Hiveminds’ E-commerce Conclave witnessed key decision makers of top e-commerce brands of India coming together to discuss the future of e-commerce inustry, which is poised to grow to $350Bn by 2030. exchange4media was the media partner for the event.</p>",
      "<p class='content'>Badrinath Mishra, Vice-President ONDC, spoke about the growing demand and the next set of customers coming from Bharat, when the sellers in these markets unlock digital channels for reaching consumers in villages and tier 3 & 4 cities of India. He added that “In India, only 1% of the 12 million retailers or 1 million wholesalers are digitized, despite high penetration of smartphones, and digital literacy. Therefore there is 100x opportunity lying in the Indian market for all platforms to grow”.</p>",
      "<p class='content'>Where Badrinath discussed the potential of e-commerce in Bharat, Vipul Parekh, the co-founder and CMO of India’s largest online grocery platform Bigbasket, emphasized that brands should connect with their audiences through meaningful messaging. He recommended that marketers should look at e-commerce platforms as a medium to communicate their product stories and aid users in new product discovery.</p>",
  ],
  content2:[
      "<p class='content'> Vipul warned against using platforms as transaction channels only. He said, “In today’s scenario competition intensity has changed dramatically. The number of brands competing for attention is very high. So on one side, brands have competition intensity and on the other side there is message intensity to consumers, so to thrive, brands have to be visible to their customers across multiple touch points repeatedly.&nbsp; </p>",
      "<p class='content'>Vijay Iyer, director, Amazon Ads India, urged marketplace platforms and brands to focus on three pillars to build a brand in India, a-educating the sellers, b-providing support to consumers and c- mining data insights./p>",
      "<p class='content'>The panel also agreed that with e-commerce growing at this pace and across all verticals and regions, it will be hard for brands to plan inventory or forecast demand on a long term basis. Brands, marketplaces, and D2C have to prepare for the long term but are agile enough to adapt to trends as they see.</p>",
      "<p class='content'>There was resounding agreement amongst panelists that with the current pace of growth of e-commerce, the old ways of inventory planning, production and forecasting will not work. Brands have long-term plans for availability, discovery and customer experience on platforms.</p>",
      "<p class='content'>Vijay Iyer especially echoed this sentiment by saying, “The buyer behavior change is not just restricted to sale events, but over time, what the customers buy, when they buy and their purchase cycles will change drastically. And I don't think there is a silver bullet solution to solve it.” So he insisted that brands and marketplaces work together and support each other to be nimble enough as the needs of consumers change or grow.</p>",
      "<p class='content'>Vaibhav Kapur of Flipkart Ads added to the context of rapid changes in e-commerce by saying that brands will have to experiment and expand their digital experience for&nbsp; consumers, be it&nbsp; personalisation or gamification or bringing offline experience online through AR, brands need to find ways to keep up with consumers growing expectations and changing behaviour in future. </p>",

  ],
  content3:[
      "<p class='content'>The last two decades in e-commerce were steady growth but the next 2 decades are going to be aggressive and rapid growth. And that growth is going to be fueled by how brands differentiate their product or service offerings, and will also be deeply influenced by the growth of Bharat markets </p>",
      "<p class='content'>Marketplaces, D2C brands, and Ads platforms will have to prepare for long-term rapid growth, have to keep close an eye on the&nbsp; market and audience insights, and will have to catch the early trends in e-commerce, to be able to adapt and deliver in the next phase of growth.</p>",
      "<p class='content'>Vijay Iyer encapsulated this with, “The ripples of change in e-commerce are going to become more and more profound. They're going to get harder and harder to miss. But if brands and marketers miss those early trends, this lapse will cost them dearly and gravely in the near and distant future”.</p>",
      "<p class='content'>This visionary panel jointly agreed on the importance of keeping a close watch on emerging consumer trends. The need of the hour is for the brand and platforms to work closely, learn fast and keep engaging with their customers across all touch points.</p>",
      "<p class='content'>The next decade of e-commerce belongs to the customers. Irrespective of whether they are urban elite expecting personalised products or first time online buyers from Indian villages, they will force the brands and e-commerce marketplaces to innovate and deliver better products and much better experiences.</p>"
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
        <Hero title1={"E-commerce: "} title2={"The High Cost of Missing Early Trends"} para={"In today's fast-moving e-commerce arena, missing emerging trends can cost brands dearly. This article reveals how proactive companies harness new opportunities to drive revenue and outpace competitors, while delaying innovation results in significant setbacks."} img={"/assets/images/blogs/ecommerce-cost-of-missing-early-trends.jpg"} category={"E-Commerce"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

