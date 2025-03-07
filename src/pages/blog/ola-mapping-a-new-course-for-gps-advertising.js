/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"July 9,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> Love it or hate it, Google Maps has become an indispensable app in our daily digital arsenal. The GPS service launched in 2005 and then introduced in India in 2008 has since become a canvas for brands and companies to showcase their locations in your city.</p>",
      "<p class='content'>Using logos of companies such as KFC and Uniqlo, Google Maps has long been leveraging its display as a digital billboard.</p>",
      "<p class='content'>So, when Bhavish Aggarwal, CEO, Ola announced that the cab-hailing service is transitioning to its in-built Ola Maps, built off the back of the company’s Krutrim AI, and thereby saving Rs 100 crore a year from not having to pay Google Maps anymore, the next logical question that arises is how much does the company intend to earn from it?</p>",
      "<p class='content'>According to&nbsp;Sajal Gupta, Chief Executive, Kiaos Marketing, Aggarwal is aggressively pushing his other startup Krutrim, where he is building India’s own AI. “The map being used by Ola is built on top of Krutrim.&nbsp; Having control of the map software opens up many more monetisation opportunities, local advertising being one.&nbsp; Krutrim is also compatible with multiple vernacular languages which opens up another audience group, even as it plays into the larger Make in India narrative.”</p>",

  ],
  content2:[
      "<p class='content'>Abhishek Upadhya, SVP, HiveMinds, notes that when it comes to Google, it's more of an ecosystem wherein the tech giant took a lot of time to get Google Cloud, Google Maps, Google Workspace, and a lot of things to come together. A lot of these products play off each other in the kind of capabilities and the offering, he points out.</p>",
      "<p class='content'>“So there is a very strong Google Maps because there is a very strong Google Cloud. Similarly, there is Ola Maps. And before that, there was an announcement of a Krutrim Cloud. Now, because they are coming together, there is a synergistic value that the companies realize.”</p>",
      "<p class='content'>“I happened to see this new map. The first thing that stood out to me was the colour; it was so vibrant. And second, you actually got some spots like shop names and nearby landmarks, et cetera, much more clearer. It seemed like someone had paid attention that this is how people consume Maps. I think Google Maps has been doing a stellar job, but I think this is now blown wide open in that sense because a new competitor has come in,” says Upadhya.</p>",
      "<p class='content'>And to use tech industry parlance has the advantage of eating its own dog food. “You build your product first and then you use it yourself.&nbsp;It is battle-tested from day one. How many SaaS companies or how many product companies get to say that?” Upadhya points out.</p>",
      "<p class='content'> Megha Marwah, Vice President - Strategy at White Rivers Media, adds that Ola's shift from Google Maps to Ola Maps couldn't just be about cutting costs and controlling user data; it could also be about rewriting the map of monetisation.</p>",
      "<p class='content'>Ola Maps could offer location-based advertising similar to Google Maps, reaching their vast user base with nearby business promotions. Additionally, anonymised data on traffic patterns and user preferences could be valuable for urban planners and businesses, generating revenue through data licensing,” she adds.</p>"
  ],
  content3:[
      "<p class='content'>Ola Maps could integrate with other Ola services like food delivery or electric vehicles, creating a seamless ecosystem for users. This move towards self-reliance opens doors to exciting possibilities for Ola.</p>",
      "<p class='content'>However, Gupta notes, Ola Maps will first build usage and then look towards monetisation. A new tech like this will have glitches which will need to be ironed out as usage goes up and it will throw surprise challenges.</p>",
      "<p class='content'>Upadhya agrees saying, “I think advertising would be the secondary space of this. Google Maps also did not initially advertise. There is a much bigger value of people licensing it as a maps tool itself. So if you are a company that requires maps, maybe you're a storefront, maybe you're a retail chain, maybe you are a delivery fleet, maybe you are a hospital chain. There are so many things where maps itself is the focus product: Google Maps API.”</p>",
      "<p class='content'>“Ads are later use cases. For example, there could be certain retail stores who could maybe put in their logos, instead of the names. And You could have hyper-local search ads coming in.”</p>",
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
        <Hero title1={"Ola: Mapping a New Course for "} title2={"GPS Advertising"} para={"Ola Maps is carving out a new destination for GPS advertising, as the article details. With advanced location data, brands can now run hyper-local campaigns, precisely targeting consumers on the go. This approach redefines local advertising, driving real-time engagement and measurable footfall increases with impact."} img={"/assets/images/blogs/ola-mapping-new-course-for-gps-advertising.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

