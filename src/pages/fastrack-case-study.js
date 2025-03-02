/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Fastrack Style ",
    subtitle2: "Shift",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Campaign transforms watch brand into fashion icon.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'> 5.5M</span> Reach; <span class='text-primary'>1.36%</span> CTR; <span class='text-primary'>1,000+</span> Sales; <span class='text-primary'>30.5</span> Frequency</p>",
    ],
    industry: "Fashion & Lifestyle",
    service: "Branding",
    category: "Transform Brand Image",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>The Fastrack #BeBoth campaign aimed to shift brand perception from solely watches to a broader, fashion-forward identity, capturing new consumer segments in the fashion space.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We began by identifying the right consumer cohorts—targeting users who recently searched for and purchased watches and fashion accessories on Myntra.  <br/> <br/>We then focused on top geo-locations and leveraged open web inventories, specifically targeting Myntra’s product listing pages.  <br/> <br/> Deep pixel integration was implemented to capture key user actions, including page views, add-to-bag events, and sales, ensuring precise measurement of campaign effectiveness. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The campaign delivered<span class='text-primary'> 5.5M</span> reach and a <span class='text-primary'>1.36%</span> CTR, generating over <span class='text-primary'>1,000+</span> sales and achieving a frequency of <span class='text-primary'>30.5</span>, successfully transforming Fastrack’s brand image for style and impact.</p>"

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
                <Hero title1={"Fastrack"} title2={""} img={"/assets/images/casestudy/bigbasket-casestudy.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

