/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"July 31, 2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> As we’ve discussed in the past, programmatic media buying is quite the black box. It has been variously compared to art auctions, where both purchasing intent and budget depend on the buyer, or to every company having its own secret recipe à la KFC when it comes digital to media buying.</p>",
      "<p class='content'>While we’ve previously covered CTV metrics, gaming, as well as the growing role of retail media and contextual advertising, it was a conversation we had while writing on the rise of home screen advertising, which inspired this article: an exploration of the role screen sizes play in determining digital media buying.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
      "<p class='text-[2.5vw]'>Si(e)zing up opportunities</p>",
      "<p class='content'>Saying programmatic media buying is an intricate process influenced by a multitude of factors, Varun Mohan, Head of Revenue and Growth at MiQ Digital, notes that price differences by screen size should be considered in the context of campaign goals and target audiences.</p>",
      "<p class='content'>“At MiQ, we connect the right people, the right technology, and the right partnerships to deliver programmatic media solutions to meet each client's challenge and meet their precise goals. We first mine deep insights about our client’s audience and then look at ad serving platforms and channels in a granular way to maximize the effectiveness of the campaign and optimize the return on ad spends (ROAS),” he says.</p>",
      "<p class='content'>Chirag Bhatia, Managing Director – India, for Channel Factory agrees that the influence of screen sizes on digital advertising rates is both profound and complex. “There are two factors to consider here: ad visibility; and engagement. Larger ad formats such as full-screen interstitials or large rectangles, provide a broad canvas for effectively communicating messages and enticing user action. These formats capture attention and allow advertisers to deliver impactful content that resonates with their audience,” he says.</p>",
      "<p class='content'>Studies by AppNexus and CPXi indicate that campaign performance significantly improves with bigger ad sizes and ad sizing directly correlates with higher engagement rates. Ads that are easy to read and visually engaging are more likely to prompt user interaction, whether through likes, comments, shares, or clicks.</p>",
      "<p class='content'>According to Bhatia, “This can lead to higher conversion rates, whether the goal is brand awareness, lead generation, or sales. In conclusion, the size of an ad can significantly impact its success, visibility, click-through rate, and overall performance.  Because of better performance, bigger ad sizes are always more in demand and command a higher price as publishers leverage the high sell-throughs to optimise towards high yield from their supply mix.”</p>"


  ],
  content2:[
    "<p class='text-[2.5vw]'>Market forces</p>",
      "<p class='content'> Abhishek Upadhyay, SVP, Digital Innovation and Strategy at HiveMinds Innovative Market Solutions says understanding your target audience is key, as is deciding whether the inventory is preferred/guaranteed or remnant and which exchanges you buy it through. “The screen size and device determinants are usually related to CTV being more expensive than desktops/laptops or expensive smartphones. This pricing gap between devices and screen sizes fluctuates depending on season, category, purchase journey, etc.”</p>",
      "<p class='content'>That being said, while screen size plays a role in determining the price for ad placements; it is not the primary factor. Cost and type of device, among other hardware characteristics, often have an impact.</p>",
      "<p class='content'>“For example, the ads shown on premium devices like high-end smartphones, Connected TV or tablets could garner premium prices based on the perceived higher purchasing power of the consumers. In programmatic buying, context does not pertain just to the size of the screen but rather to the type of content being consumed and user behaviour and engagement with the device, says Mohan, adding, ads on larger screens provide a better experience and result in better ad recall, however smaller screens such as smartphones, often result in higher conversion rates since they are easy to interact with.”</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
    
  ],
  content3:[
    "<p class='content'>Let's pick a category like gaming, for example. Upadhyay pointed out that it is disproportionately represented by mobile gaming, with apps being a huge part of how the games are played. “Naturally, advertising for that category would also prefer a native experience and be closer to the action—by spending more on mobile devices and mobile apps. The myth that people prefer laptops/desktops is increasingly changing for high-value shopping.”</p>",
      "<p class='content'> “Moreover, the cost and type of devices are often proxies for affluence. Ads targeting expensive hardware are priced at higher rates as they reach a more premium audience with higher disposable income. This audience is much smaller in numbers and more challenging to reach via ads,” says Bhatia. </p>",
      "<p>Sectors like travel, jewelry, real estate, banking, and insurance witness transactions via mobile websites and apps, enabling a full-funnel advertising experience on smaller screen devices. “This shift in consumer behaviour underscores the need to adapt to the changing digital landscape. We see the emerging interplay between device sizes; case studies prove that a user exposed to an ad on a Connected TV and a Smartphone converts at a 2x rate compared to users who have only seen the ads on smartphones. This seamless interplay between screen sizes is what makes digital powerful,” says Upadhyay.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw my-[1vw]'/>",
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
        <Hero title1={"Screen Size & Programmatic Ads: "} title2={"Does Size Matter?"} para={"Screen size plays a pivotal role in programmatic media buying. The article highlights that while larger screens generate robust engagement and conversions, smaller devices require tailored approaches. Advertisers must optimize creative and targeting to achieve better ROI effectively."} img={"/assets/images/blogs/screen-size.jpg"} category={"Programmatic Media Buying"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

