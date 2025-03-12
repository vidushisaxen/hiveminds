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
      "<p class='content'> You’re going to have to come up with a new way to exercise your thumbs, if Google has anything to say about the matter. After having introduced continuous scrolling on its Search Engine Results Page (SERP) on mobiles back in October 2021 (and for desktop users by December 2022), the tech giant said it is rolling back the feature soon. </p>",
      "<p class='content'>This means a return to paginated search results and the comeback of a good hiding spot for a dead body, aka page 2 of Google SERP. But Corpus Delicti aside, what does this mean for advertisers and marketers who are now accustomed to having plenty of wide spaces wherein to embed their ads (and with 8.55 billion searches per day, that’s a lot of real estate) so that they can be mistakenly clicked on by users? What gives,Google?</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Why, What , How?</p>",
      "<p class='content'>For Preetham Venkky, Chief Digital Officer at DDB Mudra Group, there are a few possibilities why Google could be rolling back on the scrolling, the first of which is the already well-reported pushback Google Search has been getting the last few months, as users complain of diminishing relevance in their search queries, which return a host of blue links (read sponsored ads) before you even get to the result you were looking for.</p>",
      "<p class='content'>When Google first announced the implementation of the continuous scroll in search pages, many believed it was trying to mimic the feature to replicate the success of popular social media platforms like TikTok, Instagram and its very own YouTube Shorts.</p>"

  ],
  content2:[
      "<p class='content mobile:mt-[15vw]'> “Google itself declared that they were trying to bring a modern intuitive experience to its users. However, Google search pages are not social feeds. Providing correct information takes precedence over showing an infinite amount of options. With the introduction of continuous scroll, the opposite happened. It did increase impressions for websites ranking second or third pages, but the impact was negligible,” says Ishan Chaki, Google Media Buying Manager, Adbuffs, adding that most SEO professionals understood ranking on the first page was still equally vital for organic growth. </p>",
      "<p class='content'>And then there are Google’s new product offerings, specifically its AI-powered Search Generative Experience(SGP). “While SGE provides you with a summary of your query on top, because of the nature of infinite scrolling you’ll quickly move past that. So for SGE to get a prominent hold it needs to be on top of the page, and for that there needs to be a page that has an end. By nature, if we hit the bottom of the page we then scroll back to the top (back to the SGE result),” observes Venkky.</p>",
      "<p class='content'>Abhishek Upadhya, SVP Strategy &amp; Media, HiveMinds, agrees, saying that with Generative AI overviews becoming a mainstay in the Google SERP, “It will create a hybrid structure where the relative importance of the ‘10 blue links’ will reduce over time. More consumers will prefer getting answers to quick queries directly via the Generative AI overview. Sponsored query results and Sponsored AI overview blue links are the types of ad products that might emerge.”</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:h-[1px] tablet:w-[92%]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'> What now?</p>",
      "<p class='content'>Infinite scroll led users to scroll extensively and be exposed to multiple ads along with organic listings. “However, with its removal, users will revert to accessing search engines in a more traditional manner, akin to the past. Historically, users have shown a reluctance to venture beyond the first page to discover relevant content,” observes Ashutosh Nagare, VP - Head of Performance Marketing, Interactive Avenues. </p>",
      "<p class='content'> So, advertisers will need to be more strategic and bid aggressively to secure top positions for their ads and capture user attention. “This might lead to increased CPCs, but, with fewer ads displayed, it could lead to a more positive user experience and potentially higher CTRs,” he adds.</p>",
      "<p class='content'>However, now that Google is switching back to its old model, remaining on the first page will be as important as it was before the change, if not more. Many had thought with the continuous scroll, organic results would get more benefits compared to paid search ads. </p>",

  ],
  content3:[
      "<p class='content mobile:mt-[15vw]'>“Whether that will happen or not is still debatable, but with the discontinuation of the feature, appearing on top of the first page becomes crucial. Paid ads will play a significant role just as it was doing before,” says Chaki.</p>",
      "<p class='content'>“My prediction is that bottom-of-page search ads and second-page search ad impressions will be reduced, thus increasing the prime real estate CPCs of top-of-page results. That is assuming that search ads will continue to exist in the same construct as they do today. With AI working on every aspect of advertising, we might have to adjust to new ad layouts quite soon,” says Upadhya.</p>",
      "<p class='content'>And undeniably there is an increasingly perceived need for a revamp of Google’s search page, as the savviest of techies have started migrating from Google to other AI-powered platforms. “Google will have to do two things. It will have to give you relevant results, because there is a lot of junk at this point. And hopefully, it will bring some of the unique insights back onto the homepage as opposed to average popular insights.&nbsp;I think it needs to be a mix of the two, which AI can help with,” says Venkky.</p>",
      "<p class='content'>And all of this is because, as Venkky says, “The ability of people to click on relevant links when you have an infinite scroll is going to be challenging, to say the least. It becomes like Reels or Shorts at that point. With infinite choice comes selection paralysis, because as you keep scrolling and reading blurbs, you're always searching, not selecting or purchasing. Then it becomes scrolling for scrolling's sake.”</p>",
     
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
        <Hero title1={"Google Ends Continuous Scroll: "} title2={"A New Search Era for Advertisers"} para={"Google is set to end continuous scroll, prompting advertisers to embrace a return to traditional search pagination. This significant shift is expected to enhance ad visibility and user engagement by encouraging intentional discovery, sparking debate on how evolving search experiences will reshape digital advertising strategies."} img={"/assets/images/blogs/google-ends-continuous-scroll.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

