/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Honey ",
    subtitle2: "Triumph",
    intro: "<p class='mobile:mt-[7vw] mt-[2vw]'>Pricing, trust, mix drive market leadership. <br/><br/> Saffola Honey drives a 21% sales growth in 2 tears, and secures the #1 honey brand title.  </p>",
    features:[
        "<p class=' py-[1vw]'><span class='text-primary'>21% </span> Sales Growth in 2 Years</p>",
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Enter Highly Competitive Market",
    problem: " <p class=' mt-[2vw]'>In a saturated market with aggressive pricing and established competitors, Saffola Honey struggled to gain consumer trust and achieve distinct market leadership.</p>",
    approach: "<p class=' mt-[2vw]'>We adopted a multi-pronged strategy to elevate Saffola Honey's market position. First, we improved platform presence by analyzing consumer search behaviors and deploying aggressive advertising.  <br/><br/>  Next, we refined pricing by benchmarking the Price Per Gram metric and adjusting our Relative Price Index. <br/> <br/> Simultaneously, we built trust by communicating the authentic origin of our Sundarban Honey and educating consumers on honey purity. <br/><br/> Finally, we optimized the product mix to outplay competitors, driving market leadership and customer loyalty.</p>",
    impact: "<p class=' mt-[2vw]'> Our strategic initiatives resulted in a <span class='text-primary !font-medium'> 21% </span> sales growth over 2 years, establishing Saffola as the <span class='text-primary !font-medium'> #1 </span> honey brand and market leader through increased consumer trust and optimized pricing.</p>"

}

const index = () => {
    const [isOpen, setIsOpen] = useState(false);
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();
    lineAnim()
    return (
        <>
            <Layout isOpen={isOpen}>
                <Hero title1={"Saffola "} title2={"Honey"} img={"/assets/images/impact/casestudy/saffola-triumph-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

