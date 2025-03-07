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
      "<p class='content'> We as consumers are evolving every day and so is the  ecosystem in the country. We all have become attuned to reading reviews and buying products based on their ratings and celebrity endorsements now influence only the awareness of the product, not the buying consideration of the users. With this rapidly changing retail industry, knowing the consumer and riding the trends is paramount for all marketers. The most important clue to this change is hidden in the relative interactions across multiple retail touchpoints in the user journey. </p>",
      "<p class='content'>With this background, and keeping the shopper in focus, let’s discuss some key retail trends that are defining the retail of today and tomorrow. </p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Shopping is No Longer Need-Based; The Retail Store is No Longer A Destination</p>",
      "<p class='content'>Today's consumer is “omnichand”, they interact with brands across platforms (online and in-store) seeking engagement. Formats like “buy online, pick in-store” (BOPIS) and “buying in-store, delivering to home” have already gained more popularity than “traditional buying” and will evolve into more fluid shopping journeys. Moreover, retailers are increasingly adopting Augmented Reality (AR), Virtual Reality (VR), and Artificial Intelligence (AI) to provide tactical experiences online and enhanced experiences in-store, leading to more innovative shopping experiences for consumers.</p>",
      "<p class='content'>To succeed in omnichannel retail, brands need to focus on “one view of the customer”, in the sense that the consumers can be considered ‘channel-agnostic.’ The consumer can go to a showroom to try a product and then order online (showrooming), or vice versa, or spend hours online researching the product and not make a decision at all (webrooming). Each of these actions generates valuable data for the marketers and has to be capitalised by internalising the fact that the consumer is one irrespective of the channel they use to engage with your brand. </p>"

  ],
  content2:[
    "<p class='text-[2.5vw]'>Consumers are Willing To Be Part of the Product Journey.</p>",
      "<p class='content'> Today, modern shoppers are educated, digitally savvy, and environmentally aware. They want to know more about the products they use and their journey, whether they’re environment-friendly, vegan or have an inspiring back story. User Generated Content (UGC) is increasingly finding utility in digital ads and  and communication, as consumers shift from blind trust in brand names to a higher level of user immersion. </p>",
      "<p class='content'>To pull in customers, a brand narrative must be present at every touchpoint of the consumer's journey, be it browsing, researching, buying, or reading product descriptions, as all these touchpoints will eventually guide the consumer through the conversion funnel. </p>",
      "<p class='content'>This engagement is crucial for both brand loyalty and gathering rich consumer data for crafting impactful campaigns.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Customers are Reincarnating Trends with Tech</p>",
      "<p class='content'>As consumers become more affluent, their spending patterns change in two ways: First, they upgrade to more expensive products within current categories and second, they add new categories to their lives. This is seen in trends like organic grains, cold-pressed oils, robotic cleaning devices, and fabric conditioners gaining popularity.</p>",
      "<p class='content'>This change in retail trends happens at an astonishing speed. What is hot today will be passé tomorrow. Therefore, it is only those marketers who keep abreast of these emerging consumer preferences who will be well prepared to ride trends in product, communication and positioning. </p>"
  ],
  content3:[
    "<p class='text-[2.5vw]'>Consumers Want “New,” “Better,” and “Crafted-For-Me” Products</p>",
      "<p class='content'> The new consumer is demanding and an explorer at heart. She craves experiences and products that suit her and are curated for her. With  AR/VR Technologies  maturing, there is an opportunity to give in-store experience online and ease of online checkout instore. Similarly, market basket analysis put in action helps in showing the subsequent categories to the user in her buying journey. We as marketers should constantly think of ideas that will delight the consumers by addressing their expressed as well as sometimes unrecognised needs.</p>",
      "<p class='content'>But there’s good news! In the coming years, Consumers will consume more and more frequently. So understanding a new customer, tailoring a solution for her and retaining her in the brand ecosystem, will fetch long-term returns.</p>",
      "<p class='content'>There are plenty of tech solutions today to handle all the complexities of omnichannel retail. Meta and Google offer advanced multimedia measurement tools to evaluate each channel's impact on marketing goals.</p>",
      "<p class='content'>Additionally, there are numerous plugin tools for improving product selection and user engagement with digital ads. For instance, FeedX provides a robust infrastructure to support any size of feed for running product listing ads, capable of managing feeds of more than 3 million SKUs. Other e-commerce-specific tools like BidSmart and Nucleus assist clients in improving bidding strategy and obtaining a comprehensive view of all core marketing KPIs. </p>",
      "<p class='content'>Omnichannel retail will evolve faster than our imagination. With the right choice of technology and marketing partners, retail brands can effectively ride this omnichannel wave. With a booming economy, increasing discretionary spending and a surge of tech innovations in marketing, this is the best time for Indian Retail.</p>"
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
        <Hero title1={"Retail Through the "} title2={"Consumer's Eyes"} para={"On BrandEquity, Deepti Bhadauria delivers thought-provoking insights into branding, digital marketing, and emerging consumer trends. Her articles dissect industry challenges and provide actionable strategies, helping brands innovate and excel in a competitive digital era. Her expert commentary fuels success for visionary brands, driving measurable growth."} img={"/assets/images/blogs/retail-through-consumers-eyes.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail


