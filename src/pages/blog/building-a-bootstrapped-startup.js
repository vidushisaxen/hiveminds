/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/BlogDetail/Hero';
import Details from '@/components/BlogDetail/Details';
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';

const content={
  date:"September 11,2017",
  fbLink:"#",
  linkedinLink:"#",
  twitterLink:"#",
  featuredImage1:"/assets/images/blogs/blog-img1.png",
  featuredImage2:"/assets/images/blogs/blog-img2.png",
  content1:[
      "<p class='content'>Started in 2010, performance marketing agency HiveMinds’ decision to focus on its product, Intutel, went over big with ad and marketing guru Sam Balsara of Madison resulting in a joint venture. </p>",
      "<p class='content'>The day wasn’t going as Jyothirmayee JT had planned. She was to meet the advertising legend Sam Balsara in her office, but the Bengaluru traffic didn’t relent even for the ad guru. He was stuck in traffic from the airport for over three-and-a-half hours and as a result the meeting now would have to be rushed. Jyothi was a bundle of nerves.</p>",
      "<p class='content'>She told herself not to be carried away by the aura around Sam Balsara. As the Founder, Chairman and Managing Director of Madison World and Madison Communications, Sam Balsara is reportedly the most influential person in the advertising industry today.</p>",
      "<p class='content'>Coming face-to-face with a legend in advertising, and doing a business deal with his well-known advertising firm was a daunting task to say the least. Jyothi was apprehensive her company would be side-railed.</p>",
      "<p class='content'>Having run her performance marketing agency HiveMinds for seven years, Jyothi knew it was at the cusp of a big leap frog. From a services creative marketing agency, HiveMinds was set to revisit the reason it had started -- its marketing tech product Intutel, revamped as a new product.</p>"

  ],
  content2:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Initial days</p>",
      "<p class='content'> While known in the startup world as a services market agency, HiveMinds was initially conceptualised as a product startup. In 2010, when Jyothi conceptualised her company, she thought of HiveMinds’ product- Intutel - as ‘Intuitive Intelligence’, which would combine experience and data to provide marketing solutions. </p>",
      "<p class='content'> Early on, Jyothi had decided to bootstrap. The lessons she learnt at her early startup, ReviewGist, made her wary of the investor and investment community. And that is how the services side of the organisation was born.</p>",
      "<p class='content'>“As a sole founder, it becomes difficult to focus your attention on different things. And being bootstrapped, your vision ends up focused on where the money comes from. In 2012, we shut the product side,” she says.</p>",
      "<p class='content'>The odds were huge for Jyothi. She was bootstrapped, didn’t have a strong leadership team to bank on, and being in the services business while trying to break into the product side was difficult.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
      "<p class='text-[1.5vw] mobile:text-[4vw] mobile:mt-[10vw] tablet:text-[2.5vw]'>“Everyone told me that the DNA of a services firm is different from a product company. People had to work differently for services, where after a point, your job stops, but with building a tech-based product, your ownership is complete. Every small detail needs to be managed. I knew I couldn’t manage both the services and the product side. So in 2015, I decided to give myself a year. I first brought in capable and strong leaders like Shan who provided balance. He helped me focus close to 60 percent of my time on the product,” Jyothi explains.</p>",
      "<p class='content'>Shan was brought in as a managing partner and CEO in HiveMinds. He comes with a management consultancy background.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
      "<p class='content !font-medium mobile:mt-[10vw]'>As of 2016, Intutel was built as a decision intelligence tool that helped companies make decisions on the right kind of marketing based on data.</p>",
      "<p class='content'>It has an enterprise and a self-serve version. The self-serve starts at $20 and has over 80-100 users. The enterprise version is where the team is working with a couple of agencies.</p>",
      "<p class='content'>The enterprise version is also what caught Madison World’s eye. The team saw Intutel combined well with Madison’s Clear Trade, a programmatic platform that allows brands to measure and improve customer interaction touch points necessary to influence purchases.</p>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>Digital focus</p>",
      "<p class='content'>For the last one or two years, in addition to building its own digital team within Madison Media, Sam says the company was also looking at acquiring an independent digital agency.</p>",
      "<p class='content'>He added that over the years, they have been eyeing the digital space closely. He knew that the digital spends in advertising budgets were increasing by 15 to 20 percent every year. Internally, the team is ramping its digital efforts by hiring people and looking at the space closely.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
      "<p class='content !font-medium mobile:mt-[10vw]'>Digital is the fastest-growing medium in the country today, and has been growing at 35-50 percent every year. Almost 15 percent of total ad expenses are focussed on digital. We had been scouting around and were looking for a hard-working grounded agency that could deliver real results to clients, one with a client portfolio and skill set different from Madison Media,” Sam tells me over the phone.</p>",
      "<p class='content'>While Madison works with clients like Asian Paints, Godrej Properties, Tata Chemicals, ITC and Marico, HiveMinds counts BigBasket, Cleartrip and Cloudnine as its clients. Thus by joining hands with HiveMinds, it is clear what Madison was hoping to achieve.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'> Number crunching</p>",
      "<p class='content'>A survey conducted by media buying agency Strata reveals that advertising agencies anticipated a much slower growth in the second half of this year with over 41 percent of them reportedly stating that winning new businesses is a concern. Clearly, there’s a growing need to focus on digital platforms.</p>",
      "<p class='content'>“HiveMinds were specialists in search and performance. Their client portfolio had digital startups. It was different from our profile,” adds Sam.</p>",
      "<p class='content'>HiveMinds had lived the journeys of several startups. It worked with US-based companies and was making money. The 25-member company was doing well. In fact, HiveMinds was well recognised in the startup world.</p>",
      "<p class='content'>By bootstrapping, Jyothi had ensured HiveMinds had revenue of $1 million and the media spends they managed were at $4 million. The firm was even able to grab a massive 1.5 percent of Google India’s marketing spends.</p>",
      "<p class='content'>“In retrospect, it was a bad decision because I bootstrapped at a time when there was money in the market. It is always important to understand the balance and this was one of the most important learnings over the past 10 years,” Jyothi says.</p>",
      " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
      "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'> Crossroads dilemma</p>",
      "<p class='content'>Despite growing HiveMinds, she felt a certain emptiness. Jyothi seemed to be standing at the proverbial crossroads.</p>",
      "<p class='content'>For most entrepreneurs, pivotal moments begin when they face some form of existential crisis.</p>",
      "<p class='content'>In a new office space, a strong emotion hit Jyothi. Everything from the woodwork to the paint on the walls and even the glean of the fluorescent lighting was new. It was all perfect. Yet, it didn’t feel like anything different. The same 25 people who were working out of an apartment were working out of the 75-seater office space.</p>",
      "<p class='content'>After completing eight years, at the end of 2014, Jyothi was asking herself - are we a company or am I still a glorified consultant?</p>",
      "<p class='content'>Rewinding to her thoughts to that day, Jyothi says,</p>",
      "<p class='content'>“Monetarily, we were fine. I looked around and thought we have 25 people and there is space to grow to 70. As a founder, I wondered how I would do this. Would I work with 30 more startups? It wasn’t possible, because startups generally don’t want to outsource. There are only a few seasoned startup entrepreneurs who realise that expertise cannot always be built in-house.”</p>",
  ],
  content3:[
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4.5vw]'>  Collaborating now</p>",
    "<p class='content'>Cut to the present, Jyothi knew the conversation with Sam would be the first of its kind in the industry. She was going to tell the Founder and Managing Director of Madison that she wasn’t interested in an acquisition, instead she wanted a collaboration.</p>",
    "<p class='content'>The conversation could run any way. Jyothi knew that as someone who didn’t have a media background, or had run a creative agency, she wouldn’t be able to break larger agency barriers and reach out to a HUL or Parle. While funded startups could plan a Rs 10 crore spend, it would be a one-off spend, unlike Colgate, which possibly would spend over Rs 20 crore and continue focusing on branding efforts.</p>",
    "<p class='content'>But Jyothi had learnt one lesson in her decade in the startup ecosystem: ‘Complete the journey. Never give up.’</p>",
    "<p class='content'>“I knew I had to work with the strengths we had. Being a techie, my strength was technology. And that is what I decided to focus on from the end of 2014,” Jyothi explains. In five years of establishing HiveMinds, Jyothi felt it had come a full circle.</p>",
    "<p class='content'>Now, waiting for the meeting with Sam Balsara, she felt the odds were against her.</p>",
    "<p class='content'>The Wall Street Journal reported that last week WPP posted weaker-than-expected revenue growth in its latest quarter and reduced its forecast for 2017, fuelling a stock selloff.</p>",
    "<p class='content'>It said: “Big ad firms likes WPP, Publicis Groupe and Omnicom Group have spent the past decade acquiring assets to help them adapt to the online ad business.”</p>",
    " <span class='bg-black w-[57%] h-[1.5px] absolute lineDraw mobile:hidden my-[1vw] mobile:w-[92%] mobile:h-[1px] mobile:my-[4vw] tablet:w-[92%] tablet:h-[1px]'/>",
    "<p class='text-[2.5vw] mobile:text-[7vw] mobile:font-medium mobile:mt-[10vw] tablet:text-[4vw]'>Magic words</p>",
      "<p class='content'> Jyothi didn’t have much to worry about. Sam’s words to her were just what she wanted to hear.</p>",
      "<p class='content'>“Jyothi, I want you to continue. I don’t want to make the same mistake other MNCs are making. I don’t want to acquire or buy you out. I want you to continue the journey in collaboration,” he told her.</p>",
      "<p class='content'>Jyothi explains that while Madison owns a controlling stake, the structure is like a joint venture. “It allows me to work with larger players in the market, letting me quadruple our revenues. I feel if I had taken funding, I would have had to dilute my stake in the company. I see this as a strong collaborative investment, which makes it a complete win-win situation for both the companies,” Jyothi says.</p>",
      "<p class='content'>With this deal, Jyothi now has the operational freedom to operate both the services and product wing. Also, it gives her access to clientele she earlier couldn’t reach. The product integration works in such a way that it now provides companies with decision making capabilities on where to focus their marketing spends, along with an insight into customer demographics.</p>",
      "<p class='content'>“Working with a digital agency gives us access and understanding into the digital world,” explains Sam. So, will Madison look at other digital marketing agencies as well? Sam evasively says that purely depends on the company and the team.</p>",
      "<p class='content'>As for Jyothi, she needs to be applauded for having her cake and eating it too.</p>"
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
        <Hero title1={"Building a "} title2={"Bootstrapped Startup"} para={"Jyothirmayee JT’s inspiring journey of building HiveMinds from the ground up. From bootstrapping to scaling operations with data-driven marketing, it showcases how her vision and strategic execution led to HiveMinds’ acquisition by Madison World, making a mark in digital marketing."} img={"/assets/images/blogs/bootstrapped-startup.jpg"} category={"Digital Marketing"}/>
        <Details content={content}/>
        <RelatedBlogs/>
      </Layout>
    </>
  )
}

export default blogDetail

