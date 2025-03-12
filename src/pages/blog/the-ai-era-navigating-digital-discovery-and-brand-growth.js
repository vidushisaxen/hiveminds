/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"February 13,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> <ul class='content space-y-[0.5vw] list-disc'> <li>HiveMinds, a digital marketing agency under Madison World, partners with brands like BigBasket and Domino’s. </li> <li> The founder and CEO credits the company’s growth to its initial focus on startups,</li><li> Eyeing global expansion, HiveMinds is directing attention to markets like Middle East, US, and UK,</li><li>Jyothirmayee JT discusses how marketers should adapt to a cookieless future</li></ul> </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='content'>India's digital marketing landscape has witnessed growth in recent years, fuelled by increasing internet penetration, smartphone usage, and the digitalisation of businesses. According to a report by Dentsu Aegis Network, India had around 700 million internet users by 2020, and the numbers are expected to grow to over 970 million users by 2025.</p>",
      "<p class='content'>Presently, the global digital advertising and marketing landscape is undergoing a transformation marked by the gradual removal of third-party cookies from websites and the enforcement of stricter email regulations for marketers sending mass emails daily. Search giant Google also declared that from April 2024 onward, senders of unsolicited bulk emails to Gmail users will face increased message rejections unless they adhere to the new Gmail email sender guidelines.</p>",
      "<p class='content'>HiveMinds, a digital marketing agency and a unit of Madison World, an advertising agency works with brands including BigBasket, (online grocery store); Domino’s (pizza restaurant chain); Nivea (personal care brand), Procter & Gamble, (FMCG giant), Pidilite (Indian adhesives manufacturing company), and National Payments Corporation of India (NPCI, an umbrella organisation for operating retail payments and settlement systems in India).</p>"

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>The germination</p>",
      "<p class='content'> HiveMinds was founded in 2010 and was initially working only with startups. Jyothirmayee JT, founder and CEO, HiveMinds, recalls the story of the now 14-year-old company where she said that HiveMinds being a startup based in Bangalore, which itself is a hub for startups, worked with the who's who in the market in the early days of 2012 to 2015-2016. Some of the initial brands were BigBasket, Simplilearn, Zoomcar, and redBus, which now became a part of MakeMyTrip. </p>",
      "<p class='content !font-medium'>Our whole journey was predominantly with startups who were digital-first and this challenged us to work faster and better every year.</p>",
      "<p class='content'>Additionally, she mentions that the initial vision for establishing HiveMinds revolved around developing a systematic approach to marketing since back in 2010, performance metrics held greater significance, with a focus on trackable outcomes.</p>",
      "<p class='content'>“We worked with redBus before it was acquired by MakeMyTrip. Our whole journey was predominantly with startups who were digital-first and this challenged us to work faster and better every year,” she says.</p>",
      "<p class='content'>Talking about the reason behind focussing on working only with startups, Jyothi explains, “The propensity of spending on digital at few crore a month was not there with the larger companies. I don’t think that the FMCG world invested in digital to that extent as early as 2008 and 2009 in India. So, businesses existed with startups and redBus was spending one and a half crore a month in 2013. Therefore, in my opinion, startups do tend to spend on digital and that was pretty much their only media that was going out to a large extent.”</p>",
      "<p class='content'>The idea behind HiveMinds' collaboration with Madison World was to get introduced, learn and work with notable organisations. “Madison’s acquisition of HiveMinds was from an expansion point of view. 2017 was the right year for us to focus on our expansion hence, the acquisition and it has acquired 51% of our company and we will continue to operate as a collaboration,” she says.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Expanding in the Middle East and the West</p>",
      "<p class='content'>With the Middle East witnessing rapid economic development and technological advancement, agencies are seizing the opportunity to establish a stronger presence and forge partnerships with local businesses. By diversifying its service portfolio to cater to the specific needs and demands of Middle Eastern clients, agencies and brands are aiming to position themselves as trusted advisors and catalysts for growth in this market.</p>",
      "<p class='content !font-medium'>Expanding and having a branch office in Dubai makes it easier to understand consumer behaviour making it a good target for Indian businesses.</p>",
      "<p class='content'>With regard to this, HiveMinds is also paying attention to expanding in the UAE and the US region and is strengthening its team for the same. Jyothi states that it is all about growing globally and as a marketer, one has to speak the language of customers.</p>",
      "<p class='content'>“Most of our clientele are also in the US and UK. These markets are easy because of the English language and huge media consumption but sometimes differ due to geographic locations and over 8-hour time difference. Expanding and having a branch office in Dubai makes it easier to understand consumer behaviour making it a good target for Indian businesses,” she explains.</p>"


  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Anticipating digital marketing trends</p>",
      "<p class='content'> The digital marketing realm continues to refine itself every year, striving to become a secure hub for modern marketing. Brands are actively mitigating consumer privacy concerns and optimising returns on investment, utilising third-party martech platforms to bolster their strategies. </p>",
      "<p class='content'>The digital marketing industry is seeing significant trends take shape including a focus on personalised marketing at scale through advanced data analytics and AI, and the continued dominance of video content. Brands are now prioritising AI and data ethics, while also exploring social commerce, augmented reality, and virtual reality.</p>",
      "<p class='content !font-medium'>I think the coming decade is going to be about how and what are you telling us as a story.</p>",
      "<p class='content'>According to Jyothi, the way consumers shop and engage with brands will change in the coming years. There is a shift from the local store to online price comparison and reviews. “There is going to be a new era of discovering things with the support of AI through sales assistants and this is how marketers will look at advertising too. One has to look at making a sequence of ads to engage with customers,” she asserts.</p>",
      "<p class='content'>She also says that with cookie restriction, the role of marketers would change and will not be only about who to target but will move towards how to target. “I think the coming decade is going to be about how and what are you telling us as a story. There will be multiple ad networks and the monopolies becoming fragmented is what I see as another big trend,” she states.</p>",
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
        <Hero title1={"The AI Era: "} title2={"Navigating Digital Discovery & Brand Growth"} para={"How brands leverage AI-driven insights to optimize campaigns, enhance consumer engagement, and drive sustainable growth, ultimately reshaping the landscape of digital discovery and brand development—unlocking new dimensions in marketing innovation."} img={"/assets/images/blogs/the-ai-era.jpg"} category={"Branding"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

