/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Saffola Honey ",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Aggressive deals ignite rapid growth.<br/><br/>Saffola Honey achieves excellence as it ranks Top 3 in Sept 2022 and sees 100% CTR growth with 50% higher conversions.  </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'>100%</span> CTR Growth; <span class='text-primary'>50% </span>Higher Conversions; Top 3 Rank (Sept 2022)</p>",
      
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Pricing - Deals & Discounts",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Saffola launched its peanut butter in April 2022 amidst a saturated gourmet market, facing low organic relevance and brand recall from established competitors.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>Recognizing Price Per Gram (PPG) as a key conversion driver, we temporarily reduced the PPG by 50% to spur product trials  <br/><br/> Simultaneously, we aggressively promoted the offer, ensuring high share-of-voice through increased bids on all category keywords and targeted ad placements. <br/><br/>This dual strategy boosted visibility and incentivized trial among new customers, overcoming low organic relevance.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved <span class='text-primary'>100%</span> CTR growth,<span class='text-primary'>50% </span>higher conversions, and secured a Top 3 rank in September 2022, rapidly accelerating product trials and market penetration.</p>"

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
                <Hero title1={"Safolla "} title2={""} img={"/assets/images/impact/casestudy/saffola-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

