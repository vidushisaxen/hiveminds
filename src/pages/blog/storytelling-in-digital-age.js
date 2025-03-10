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
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'> To cut a long story short…or not?</p>",
      "<p class='content'> Digital platforms allow or even compel brands to adapt their narratives to multiple formats and ad durations while retaining the core of the idea. Long-form content that allows for immersive and leisurely storytelling coexists with bumpers, reels, and shorts, with just a few seconds to capture the viewer’s attention and tell the brand’s story. </p>",
      "<p class='content'>Preganews has consistently used short films of 2-4 minutes to establish that motherhood and career can co-exist for a woman. #shecancarryboth demonstrates the power of storytelling. At the other end of the spectrum, a youth-centric brand like Fastrack Watches used a 30s thematic video featuring a celebrity to establish the #BeBoth proposition. It supplemented it with multiple 15s videos, bumpers, shorts and reels that carried forward the theme. </p>",
      "<p class='content'>Deploying multiple creative formats for storytelling can also help the brand meet various communication and marketing goals, such as maximising reach, growing store footfalls, growing brand searches and focusing on specific regions. The festive campaign for Tanishq leveraged multi-format storytelling on YouTube to great effect</p>",
      "<p class='content'>Interventions such as ad-sequencing, retargeting video viewers through non-skip ads and bumpers, and frequency optimisations through target frequency plans aim to control the storytelling experience in the digital world. The length of a brand message depends on the idea, the audience, the marketing context, and the platform under consideration. The key is to ensure that the brand voice remains consistent, regardless of where the consumer encounters the brand communication.</p>",

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Keeping the story ‘real’</p>",
      "<p class='content'>According to the EY and Big Bang Social’s report titled ‘State of Influencer Marketing in India’, 75% of brands consider influencer marketing part of their marketing strategy. While high-end celebrity ambassadors can create larger-than-life imagery and purchase decisions for a brand, micro and nano influencers drive engagement and lend ‘relatability’ to it by bringing in regional languages and small-town nuances. Influencer marketing has broadened the scope of storytelling by a brand as it leverages the unique narrative styles and audience affinities of various individuals and can also create topical communication that is relevant in the short term. Lifestyle, fashion and beauty are the key segments where influencers are driving the brand’s consumer engagement. </p>",
      "<p class='content'>User-generated content and interactive ad formats are other ways to involve the audience in creating more credible, authentic brand stories that resonate better with them. </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Leveraging technology for Storytelling</p>",
      "<p class='content'>Brands are creating novel storytelling formats using emerging technologies like generative AI, augmented reality and mixed reality. Britannia’s ‘1947% More History’ campaign used these technologies to bring alive stories of 5 nonagenarian freedom fighters, using Britannia packs as the medium.</p>",
      "<p class='content'>Cadbury Celebrations’ recent ad used personalisation at scale through AI to create a unique and memorable experience for its consumers - a story they would cherish forever. Caratlane’s Postcards campaign also showcased a unique storytelling format by embedding personalised messages in jewellery pieces that would play when the piece is scanned.</p>",
      "<p class='content'>Another recent example is the mixed reality newspaper advertisement for Britannia Nutrichoice Biscuits, featuring Ranveer Singh, where the newspaper ad would transform into a video experience on the phone by simply scanning the ad with the smartphone camera.</p>",
      "<p class='content'>These examples show that leveraging emerging technologies is only limited by a marketer’s imagination and creativity. Advances in AI have given the art of storytelling a boost. Understanding the scope and possibilities of AI, coupled with a deep understanding of human behaviour, will be a critical skill for digital marketers.</p>"
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Make (them) believe the story</p>",
      "<p class='content'> Continuous evaluation of the brand's narrative is not just critical; it's crucial. It's the key to assessing its efficacy and ensuring it resonates with the audience. Deployment of A/B tests, BLS studies and brand tracks is the roadmap towards formulating the right communication strategies. Continuous measurement of metrics such as CTRs, VTRs, engagement rates, conversion rates and brand health measures is not just a task; it's a process that helps refine the brand's storytelling approach, instilling confidence in its effectiveness.  </p>",
      "<p class='content'>Digital media allows audiences to discover and curate content according to their preferences; the same holds true for brand messages. Consumers who resonate with a brand's stories and identify with its positioning can express this affinity by 'following' it on social media and/or opting in for the brand's updates to be shared with them through channels like WhatsApp. Ultimately, a brand's storytelling should help it differentiate itself and create a unique personality that appeals to its core audience.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[1.5vw] !font-medium'>‘Write your story as it needs to be written. Write it honestly, and tell it as best as you can. I am not sure that there are any other rules. Not ones that matter’ - Neil Gaiman </p>",
     
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
        <Hero title1={"Storytelling in the Digital Age: "} title2={"Brand Communication & Its Impact"} para={"The piece explores how brands are revolutionizing communication by leveraging digital marketing to tell authentic stories. Through innovative content, social media strategies, and immersive storytelling, brands create memorable experiences that captivate audiences, foster engagement, and ultimately transform their market presence with significant measurable impact remarkably."} img={"/assets/images/blogs/storytelling-in-digital-age.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

