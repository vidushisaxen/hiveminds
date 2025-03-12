/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"August 31, 2023",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> 2020 saw the Indian government pull the plug on TikTok. In a short time, several short video platforms sprang onto the scene. Witnessing the rising popularity of these apps, influencers and brands found it opportune to be part of the phenomenon. The lockdown saw users flocking to this quick mode of entertainment and advertisers saw the opportunities they offered.</p>",
      "<p class='content'>So, what is the status after 3 years? </p>",
      "<p class='content'>Instagram Reels and YouTube shorts are ruling the scene. Being associated with an already large user base through their sister applications, Instagram and YouTube are attracting advertisers and brands on a larger scale. According to Comscore data, from 2021 to 2022, the number of engagements that they generated on social media increased by +171% for Instagram Reels, and +3940% for YouTube Shorts.</p>",
      "<p class='content'>The picture, however, is not rosy for the Indian short video applications. The number of Monthly Active Users for players like ShareChat, Moj and Josh has not been very inspiring as per the figures of the Q3 of 2022 according to Comscore data. The time spent per user data by data.io also shows how these companies are falling behind Insta and YouTube. (See graph below)</p>",
      "<p class='content'>Although the advertising revenue for some of these applications saw quite a jump in 2022 from 2021, according to Tracxn data, the story might not be the same by the end of 2023, say experts.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>What are players saying?</p>",
      "<p class='content'>Gaurav Jain, Head of Emerging Businesses, ShareChat and Moj, told e4m: “We have significantly decreased our marketing expenditures to nearly zero on ShareChat and Moj. Surprisingly, this change has not affected our user base or engagement metrics. Conversely, due to the reduction in expenses and the increase in revenue, we are striving to achieve profitability within this year.”</p>",
      "<p class='content'>On the path ahead, Jain said, “We aspire to become the preferred destination for brands of all sizes, whether they are large multinational corporations or local regional players in search of their next customer. ShareChat and Moj offer not only advertising products that cater to all stages of a traditional marketing funnel but also serve as a comprehensive solution for tailored content marketing initiatives through our Influencer Marketing and Hashtag Challenge offerings.”</p>"

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Not trending anymore?</p>",
      "<p class='content'> Hiren Shah, Founder & Chairman, Vertoz, says there has been some reluctance on the part of advertisers when it comes to short Indian video applications. “According to the recent trends, some advertisers are reevaluating their investments in these platforms since they have concerns over various factors affecting their advertisement performances.  However, it's important to note that the situation is dynamic, and the extent to which advertisers are pulling back can vary across platforms and sectors.” </p>",
      "<p class='content'>Low user engagement could indeed be a contributing factor to the challenges faced by short Indian video applications in terms of advertisement performances, Shah concedes. “However, it's not the only explanation. Other factors like user churn, competition from other platforms, evolving content preferences, and regulatory changes could also play a role. Additionally, these platforms' quick development may have caused certain teething issues in ensuring uniform user experiences and content quality,” he added.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='content'>Karan Taurani of Elara Capital believes that since the launch of Instagram reels, the other Indian short video applications have struggled to keep up. “Advertising dollars or budget struggle for your time spent and consumption. So, if you look at the time spent consumption, the numbers of users, and all those metrics, they are working very favourably for apps like Instagram, for real business. I think that's clearly the reason in terms of why the budget could move there.”</p>",
      "<p class='content'>For the overall short-video market, Jyothirmayee JT, CEO HiveMinds, believes that there is an abundant attraction from brands. But when it comes to choosing the applications, Indian platforms are falling behind in the race.</p>",
      "<p class='content'>“Advertisers and brands’ affinity for the format is very high. There is high adoption, even from large brands, for the web stories and Reel-based formats. What we are seeing with the specific short video applications in question is the problem of fragmentation. While each of the listed apps boasts of a few hundred million users as their base - for an advertiser it has been a challenge to consolidate the reach by deploying across two to four platforms or to account for unique users which is very difficult.</p>",
      "<p class='content'>Secondly, most of them have got a skew towards and associated with regional, tier2, and/or lower SEC as compared to Meta ecosystem or YT shorts, Google Discovery. Except for the pan-India brands - many others might choose to exhaust reach on the Tier1 platforms and then move into the short video apps.”</p>",
      "<p class='content'>Aditi Mathur Kumar, Associate Vice President - Creative Business Lead, Interactive Avenues, says there has not been a significant pullback from advertisers but the impact on revenues could be due to the overall diffused AdEx over the past two quarters. “The impact on revenues might be a result of various factors, including low user engagement on these platforms. To succeed in this competitive landscape, content strategy and creative nuancing are of paramount importance. Considering the ever-increasing high-speed Internet access and social content consumption, seamlessly integrating creative ideas with platform nuances can lead to successful outcomes.”</p>"
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Effect on creator economy</p>",
      "<p class='content'> These short video platforms are the biggest money-makers for creators and influencers. With this changing dynamic and shift to the big tech platforms, how is the influencer community going to be affected? </p>",
      "<p class='content'>As for Shah, “Several influencers have established their presence and built significant follower bases via these channels and any fluctuation in advertisement performances or user engagement directly affects the opportunities for these influencers to monetize their content through partnerships with advertisers. However, influencers often diversify their presence across multiple platforms, reducing their dependence on a single platform's success. This situation emphasizes the need for influencers to stay attuned to shifting trends and explore multiple avenues for engagement and collaboration beyond a single platform.”</p>",
      "<p class='content'>Abhishek Upadhya who is VP Strategy & Media, HiveMinds, opines that the newer generation of content creators has always been more business-savvy, market-aware, and strong at understanding content & market trends. “TikTok’s adoption didn’t happen in a vacuum, it happened because savvy creators knew that the platform was giving them the necessary tools and the seed audience to share their talent quickly and widely. Influencers will move and adapt to the winning platforms - because of aforementioned network effects, you want to be where your audience is - the audience is there because you’re there.”</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>The Future</p>",
      "<p class='content'>There is a lot of scope for these platforms in question, nevertheless. It is a big market and hence this hiccup, if handled well, could give a push towards higher engagement and save advertising dollars.</p>",
      "<p class='content'>Vertoz Founder Shah says the future of short Indian video applications remains promising, but it will likely involve a period of adaptation and transformation. “Millions of people have been drawn to these platforms, which have integrated themselves completely into the digital landscape. To ensure sustained success, platform providers need to focus on enhancing user engagement through innovative content formats, improving content moderation to ensure quality and safety, and building deeper relationships with advertisers. Platforms that can effectively deal with such challenges are more likely to thrive in the long run.”</p>",
      "<p class='content'>“I expect that there would be consolidation and some churn of some players - which has to some extent already happened. Larger Content platforms struggling to crack the Bharat story will acquire these platforms who have already made inroads beyond Metros, and make it as part of their larger distribution and growth strategy,” Upadhyay adds.</p>"
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
        <Hero title1={"Short Video Apps:"} title2={" Ad Investment Hesitation"} para={"In the wake of rising digital maturity, brands are rethinking investments in 'desi' short video apps. With challenges in monetization and inconsistent user engagement, advertisers are growing wary, favoring a wait-and-see stance as they scrutinize ad performance and ROI in this evolving market."} img={"/assets/images/blogs/short-video-apps.jpg"} category={"Video Formats"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

