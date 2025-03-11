/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"January 23,2024",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'> ‘What’s your Roman Empire?’ A trend that has been doing rounds on social media in the past few months implies a person’s thoughts in their free time, a glimpse into someone's idle musings. But what about your musings of brands and agencies when a national event like India's Republic Day rolls around? How have creatives been thinking about such occasions, and what should they actually focus on? Well, industry experts have their advice to share.  </p>",
      "<p class='content'>As India celebrates its 75th Republic Day on January 26, 2024, the country is proud of this massive achievement. Besides all the turmoil over the years and the current political tide, India remains a formidable example of a Republic. We mark 75 years of being a proud, complex, and sometimes defiant Republic. It's a day of parades, national anthem goosebumps, and, yes, a dose of introspection. While the country grapples with its triumphs and trials, brands predictably see an opportunity to join the revelry. </p>",
      "<p class='content'>As the year’s first monumental occasion inches closer, brands look to harness its tide to propel their campaigns forward. However, the importance of not being redundant and repetitive cannot be overemphasized. The focus should lie on ditching the one-size-fits-all, flag-waving approach; it should be on resonance rather than spectacle. Authenticity and genuine engagement, thus, become extremely important. </p>",
      "<p class='content'>Today's discerning audience craves authenticity, nuance, and a genuine understanding of the India they inhabit. In the charged atmosphere of 26th January, brands will be itching to join the celebratory chorus, but navigating the sphere of patriotic marketing requires a delicate touch.</p>",
      "<p class='content'>While ideating and working on campaigns, it always helps to have a list of dos and don’ts at hand to ensure a successful campaign. Industry experts shed light on things to keep in mind when working on Republic Day campaigns and topical creatives to share their advice on making campaigns that stand out: </p>"

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Naila Patel, Sr. Vice President and National Creative Director, Mirum India:</p>",
      "<p class='content'> Brands and agencies love to jump on the fixed and fluid moments bandwagon, especially on social media. And while most of these opportunities do not come with dos and don’ts, there are some days and occasions that should come with an unwritten code of conduct. Republic Day is one of them!  </p>",
      "<p class='content'>It’s a day of immense pride for every citizen of the country and agencies/ brands should keep the following things in mind while creating content:</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Try and dial-up pride and emotion, but don’t make it a forced fit </li><li>Use the tricolors in a beautiful visual manner </li><li>Let the communication be country first, not brand first </li><li>Indians have a fabulous sense of humor, so be clever and funny but never demean the country or countrymen in any manner </li><li>The Republic Day has many cultural nuances; use them creatively </li><li>Make a word cloud of what this day means to one and a half billion people, and find a niche to say your piece </li></ul></p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Ramanuj Shastry, Creative Chairman, Infectious Advertising: </p>",
      "<p class='text-[1.5vw] !font-medium'>Dos</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Be patriotic tastefully: Be respectful and authentic in your messaging.</li><li>Borrow from culture: Use Insights, music and visual language that showcase our rich heritage.</li><li>Align values: Align your brand message with positive values associated with Republic Day.</li></ul></p>",
       "<p class='text-[1.5vw] !font-medium'>Don'ts</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Avoid commercialization: Steer clear of verbiage that feels opportunistic.</li><li>Avoid trivializing: Ensure that the advertising doesn't disrespect the significance of the occasion. </li><li>Stay apolitical: Avoid political topics or comments.</li></ul></p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Deepti Bhadauria, Chief Strategy Officer, HiveMinds: </p>",
      "<p class='content'>With the growth of retail and online shopping in India, we have come to realize that any national or religious festival can be celebrated as a potential sale festival. Also, with holidays and sometimes long weekends around Republic day, we get yet another opportunity to engage with users.</p>",
      "<p class='text-[1.5vw] !font-medium'>Dos</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Celebrate the National event for what it stands for – Pride, unity and sovereignty</li><li>Engage with your users with interesting questions, trivia quizzes etc.</li><li>For impulse categories, long weekends and Republic Day holidays can be opportunities to conduct a tactical campaign for online sales or store walk-ins.</li><li>Use your social media to share how your brand and internal teams are celebrating the event to keep it real.</li></ul></p>",
       "<p class='text-[1.5vw] !font-medium'>Don'ts</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Do not use the National holiday only for a sales campaign, find the right integration with your brand. For categories that are high involvement purchases and involve long research and compare periods, Republic Day tactical campaigns might not work.</li><li>Do not shift focus from the main event, it is important to keep the narrative right, such as which year we are celebrating, etc.</ul></p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Mukund Olety, Chief Creative Officer, VML India:</p>",
      "<p class='content'>Stay true to your brand values and constitutional values in your communication. And don’t start an ad / post / reel with “This Republic Day, xxxxx (whatever your brand is offering)” or use the template of Desh ki xxxxx (whatever your brand stands for). Be genuine, stay true to your voice.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Moumita Pal, Head of Creative, Enormous:</p>",
      "<p class='content'>I may not be the first person to say this, but the most important thing for any brand is to discover why a Republic Day ad is relevant to them, especially those culminating in a strong message. A feeble connection, I believe, is destined to fall flat, lacking the resonance required to leave a lasting impression. These days, brands often do it solely for visibility, precisely the kind of thing that should be avoided. It's time to break away from the cookie-cutter attitude with which we approach topical advertising. A sharp brief, a unique proposition, and a strong connection with the brand, mixed together, can form a clichéd but necessary concoction to create something that is not only released but also remembered. When I look at a Republic Day ad or content, I don't view it differently. I examine it as I would any other piece of content from that brand.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Jagdish Acharya, Founder & Creative Head, Cut The Crap:</p>",
      "<p class='content'>Republic Day is much less understood and does not offer a free-size creative leverage as opposed to, say, Independence Day. Look out for the trap of banality - of merely parroting a happy Republic Day. And look for a connection with your brand or cause. If there is none, find a unique way to communicate- design can often come to the rescue. NOTA of course, to the brands looking to justify an offer - Republic Day is as good a reason as any.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Rahul Mathew, Chief Creative Officer, DDB Mudra Group:</p>",
      "<p class='content'>I would ask the same question that I ask of most moment/occasion-based advertisers - Is the work interesting or is your media plan loud? Because if you’re not one of the two chances, you would be lost in the tricolour sea with words like “This Republic Day…” and “Celebrate your right to…” floating around. Unfortunately, most of the work is at best the latter. If there’s any advice I would have for brands and agencies is that either do something that you’ll be remembered for or save yourself that money and headache.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Mayank Vora, Co-Founder & Director, Logicloop:</p>",
      "<p class='content'>Crafting a Republic Day campaign requires a balance of creativity, cultural sensitivity, and social responsibility. To connect with millions on this significant occasion, it is crucial to approach the matter with care and authenticity. Prioritizing initiatives benefiting society, embracing diversity, and weaving narratives of courage. Engaging digitally, avoiding stereotyping, and maintaining political neutrality. The Campaigns could be infused with social responsibility, showcasing a genuine commitment to the well-being and community causes. Authenticity is one of the keystones of impactful Republic Day campaigns. In conclusion, we should be guided by the principles of sincerity, inclusivity, and social responsibility, contributing positively to the collective spirit of our great nation.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw  mobile:hidden mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] my-[1vw]'/>",    
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw]'>Jasmine Shah, Assistant Manager Client Servicing, BC WEB WISE:</p>",
      "<p class='content'>There is perhaps no national event more important and less understood than Republic Day. A celebration of the democratic principles embedded in our constitution as well as our capacity to self-govern, most brands tend to treat it as no more than simply an extension of Independence Day, with vague appeals to diversity and unity as well as a colour palette heavy on the tricolours. The most important step for brands is to understand and explain the historical significance of the occasion, especially in a way that facilitates a deeper understanding and appreciation for it amongst audiences.</p>",
      "<p class='content'>With this in mind, let us explore some of the Do's and Don'ts that brands should keep in mind for Republic Day:</p>",
      "<p class='text-[1.5vw] !font-medium'>Dos</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Sensitivity - The Campaign should ensure that cultural sensitivity and historical significance are respected. The campaign should not trivialize or misrepresent the patriotic sentiments of the people.</li><li>Messaging- The message communication should target diversity, that speaks to a wide range of people. Given the complexity and depth of India's culture.</li><li>Utilize the theme- The campaign should include patriotic themes for the particular year honoring the spirit of the nation. Further, highlighting national pride and unity can resonate well.</li><li>Engagement with audience -  Interact with the audience to increase awareness of your campaign and create a personalized experience that will help the audience connect with the brand. Use relevant hashtags to make it to the top!</li><li>Highlight any special offers/promotions - Seamlessly integrate and highlight promotions into the campaign narrative, ensuring they enhance the overall Republic Day experience and avoiding an overtly promotional/sales tonality in the messaging.</li><li>Collaborate with Local - Collaborate with local artists, talent, and influencers to add authenticity and a taste of patriotism to your campaign.</li><li>Showcase National Achievements- Highlight positive national achievements, milestones, or inspirational stories that relate to the theme of Republic Day celebrations.</li></ul></p>",
      "<p class='text-[1.5vw] !font-medium'>Don'ts</p>",
      "<p class='content'><ul class='list-decimal space-y-[0.5vw]'><li>Sensitive image or Language: Be very cautious while selecting images and verbiage/tonality for Republic Day. Given the national significance of the occasion, careful consideration must be given to avoid disrespect, preventing potential backlash. Be vigilant in selecting the tonality that promotes tolerance, respect, and cultural awareness. Maintain the integrity of your campaign while building a favorable rapport with the target audience.</li><li>Marketing Gimmick: Avoid using Republic Day majorly as a marketing gimmick as it might be perceived as disrespect and insincerity towards the people’s sentiments.</li><li> Misuse of National Symbols - Respect the guidelines when it comes to using national symbols such as the Flag, Emblem, or Anthem. Make sure that its use aligns with the legal and cultural norms.</li><li>. Political affiliations: Republic Day is a national celebration and brands must avoid political affiliations or controversial issues.</li><li> Last-Minute Planning: Avoid last-minute chaos by planning your campaigns well in advance. Rushed campaigns lack depth and have a high chance of errors.</li><li>Over-commercialization: Avoid over-commercialization. Focus on the essence of Republic Day and not just sales and promotions of particular products or services.</li></ul></p>",



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
        <Hero title1={"Republic Day Campaigns: "} title2={"An Expert's Guide"} para={"Industry experts share best practices for Republic Day campaigns in this guide, highlighting the importance of combining authentic storytelling with strategic digital execution. The article offers actionable insights to help brands create culturally resonant campaigns that boost visibility and deepen customer engagement."} img={"/assets/images/blogs/republic-day-campaigns.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

