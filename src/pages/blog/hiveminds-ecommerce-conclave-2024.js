/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"June 17,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> On June 6th, Hiveminds, a leading digital marketing agency under the Madison World umbrella, hosted the E-commerce Conclave 2024: An India Opportunity in Gurgaon. The event was about industry leaders and D2C founders gathering to discuss and debate the D2C and retail landscape in India. One of the highlights was the much-anticipated launch of Hiveminds’ ‘D2C: The India Opportunity’ playbook, a roadmap for brands navigating the thriving Indian D2C landscape. </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[15vw] tablet:text-[4.5vw]'>The Hiveminds Playbook: A Guide to D2C Success</p>",
      "<p class='content'>HiveMinds D2C playbook, which is conceptualized by Deepti Bhadauria, Chief Strategy Officer, Hiveminds, and her strategy team, was unveiled by esteemed dignitaries. The D2C playbook equips brands with the knowledge and strategies needed to conquer critical areas like building brand loyalty, optimizing pricing strategies, and crafting a winning omnichannel approach. Rahul Talwar, Executive VP & CMO, Maxlife highlighted that the Hiveminds 4E matrix model which consisted of stages of consumer’s evolutions and purchase behavior was the aha moment in the playbook.</p>",
      "<p class='content'>The event began with a welcome note from Pradeep Saluja, Chief Operating Officer at Hiveminds. Industry veteran Sam Balsara, Chairman, Madison World, emphasized the power of e-commerce as a brand-building tool in his opening address. Shireesh Joshi, Chief Business Officer, ONDC, followed with a captivating keynote address, setting the stage for the day’s discussions.</p>"

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[15vw] tablet:text-[4.5vw]'>Series of insightful D2C Debates</p>",
      "<p class='content'> A series of insightful panel discussions chaired by Vikram Sakhuja, Group CEO, Madison, and Jyothirmayee JT, CEO, Hiveminds, explores key D2C topics.</p>",
      "<p class='content'><span class='font-medium'>Building Brand Loyalty in a D2C World: </span> “Marketplaces are great for initial growth, but D2C allows you to control the customer experience and build brand loyalty,” emphasized Adarsh Sharma, Chief Business Officer, FS Life. Experts like Sharma and Prejit Narayan, Chief Business Officer, Boat Lifestyle discussed the growing importance of D2C for fostering customer loyalty, especially as customer acquisition costs rise.</p>",
      "<p class='content'><span class='font-medium'>The Power of Omnichannel for D2C Success: </span> In the panel led by Dhruv Aggarwal, Partner, Bain & Company, along with Chella Pandyan, Chief Growth & Marketing Officer; and Pooja Baid, Chief Marketing Officer, Philips Domestic Appliances; and Sagar Boke, Country Head, Vectura Fertin Pharma (Ryze), the importance of a seamless customer experience across all touchpoints was debated. “Use omnichannel to showcase the brand’s promises and speak a singular language,” highlighted Chella Pandyan.</p>",
      "<p class='content'><span class='font-medium'>Reaching High-Value Customers Through E-commerce Advertising:  </span> Led by a Jyothirmayee, the panel featured marketing leaders like Pragya Bijalwan, CMO, Crompton Greaves; Vaibhav Kumar, Head, Products & E-commerce, Maxlife; and Manu Kumar, Head of Marketing and Corporate Communications, Hero EV, who discussed how the definition of affluence is changing in the D2C space where premiumization is growing as a norm. The panel also explored strategies for reaching affluent and informed customers within the e-commerce ecosystem.</p>",

      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='content'>Building a House of Brands vs. One Strong Brand: Experts like Karan Chowdhary, Co-founder, Wow Skin Science, and Kapil Narnaware, Chief of E-commerce, Business Head, Pidilite, tackled the pros and cons of single brand versus house of brands approaches, focusing on maintaining brand consistency and optimizing unit economics. Varun Gupta, CGO, Bombay Shaving Company; and Sidhant Keshwani, Founder & CEO, Libas, highlighted the role of the house of brands when reaching contrasting audience segments and also bringing price elasticity to the category.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[15vw] tablet:text-[4.5vw]'>Fireside Chats: Real-World D2C Perspectives</p>",
      "<p class='content'>Shreedha Singh, Co-founder & CEO, The Ayurveda Co.; Pankaj Vermani, Founder & CEO, Clovia; and Nawal Ahuja, Co-founder, of Exchange4media Group, shared valuable insights from their entrepreneurial journeys during fireside chats, offering real-world perspectives on customer acquisition and brand building.</p>",
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[15vw] tablet:text-[4.5vw]'>Key Takeaways and D2C Success</p>",
      "<p class='content'> The Ecom Conclave 2024 provided attendees with actionable insights for navigating the D2C landscape in India. Key learnings included: </p>",
      "<p class='content'>The strategic role of both marketplaces and D2C channels in a brand’s growth strategy and as a space to tell the brand’s story.</p>",
      "<p class='content'>The need for data-driven decision-making to optimize pricing and marketing. The criticality of user segmentation within Tier I, II, and III cities cities and how the proportion of the affluent audience impacts LTVs.</p>",
      "<p class='content'>The importance of building strong brand loyalty to combat rising customer acquisition costs, especially when building a house of brands.</p>",
      "<p class='content'>The value of omnichannel marketing in creating a consistent customer experience and communication.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[15vw] tablet:text-[4.5vw]'>Hiveminds: Your D2C Partner</p>",
      "<p class='content'>The Ecom Conclave 2024 solidified Hiveminds’ position as a thought leader in the D2C space. With their data-driven approach, experienced team of professionals, and the newly launched D2C playbook, Hiveminds empowers brands to maximize their D2C efforts and thrive in the competitive e-commerce landscape.</p>"
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
        <Hero title1={"Hiveminds eComm Conclave '24: "} title2={"India Opportunity Playbook"} para={"In “An India Opportunity Playbook,” the HiveMinds Ecomm Conclave 2024 article details a gathering of top industry experts. They discuss innovative strategies and actionable insights to fuel e-commerce growth, transform retail dynamics, and chart a clear, collaborative roadmap for success in India’s digital marketplace."} img={"/assets/images/blogs/hiveminds-ecommerce-conclave-2024.jpg"} category={"E-Commerce"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

