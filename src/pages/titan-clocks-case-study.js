/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Titan Clock ",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Strategic launches ignite accelerated clock market growth.<br/><br/>Titan clocks transform and reimagine the clock market as they achieve 6.5x revenue in a year </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'>6.5x</span> Revenue Growth; <span class='text-primary'> 2x</span> Faster Category Growth;<span class='text-primary'> 2x</span> Increase in Brand Searches</p>",
      
    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Product Launch on Ecommerce",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Titan Clocks needed to optimize market penetration in Amazon’s Wall Clocks category, positioning itself as a dominant player while operating within tight budget constraints.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We targeted the right audience by prioritizing high-intent category keywords and emphasizing premium placements to maximize impact.  <br/><br/> Our strategy leveraged a diversified media mix with varied ad formats for broad visibility. <br/><br/>We also implemented phased media investments aligned with key events, capitalizing on New-to-Brand consumer segments while carefully managing spend under budget constraints. This comprehensive approach drove sustained market penetration and boosted overall performance.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'> Titan Clocks achieved <span class='text-primary'>6.5x</span> revenue growth in one year, with <span class='text-primary'>2x</span> faster category growth and a <span class='text-primary'> 2x</span> boost in brand searches, solidifying its leadership in the clock market.</p>"

}

const index = () => {
    const [isOpen, setIsOpen] = useState(false);
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();
    return (
        <>
            <Layout isOpen={isOpen}>
                <Hero title1={"Titan"} title2={""} img={"/assets/images/impact/casestudy/titan-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

