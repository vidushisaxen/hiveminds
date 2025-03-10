/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Skillmatics Sales ",
    subtitle2: "Surge",
    intro: "<p class='mobile:mt-[7vw] mt-[2vw]'>Targeted ads drive 2x sales growth  </p>",
    features:[
        "<p class=' py-[1vw]'> <span class='text-primary'>2x</span> Sales Growth; <span class='text-primary'>>$2000/day</span> in US; ACoS <span class='text-primary'><60%</span> in India; <span class='text-primary'>4% </span> MoM conversion increase</p>",
      
    ],
    industry: "International",
    service: "Marketplace",
    category: "Improved Sales Share on Amazon US and India",
    problem: " <p class=' mt-[2vw]'>Skillmatics aimed to maximize its Amazon presence in the US, achieving over $2000 daily sales while keeping ACoS below 60% in India amid fierce competition.</p>",
    approach: "<p class=' mt-[2vw]'>We implemented a multi-faceted advertising strategy by first developing a comprehensive product-to-keyword grid that aligned each SKU with its most relevant search terms. Next, we designed SKU-specific campaigns across different ad platforms, such as HSA and SPA, ensuring messages were tailored for maximum resonance. Continuous refinement through performance monitoring and age-based segmentation allowed us to eliminate underperforming SKUs and optimize budget allocation, thereby maximizing ROI and driving exponential growth.</p>",
    impact: "<p class=' mt-[2vw]'>Achieved daily US sales exceeding <span class='text-primary'>$2000</span>, maintained ACoS under <span class='text-primary'>60%</span> in India, doubled sales in 2 months, and improved conversion rate by <span class='text-primary'>4%</span> MoM.</p>"

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
                <Hero title1={"Skillmatics"} title2={""} img={"/assets/images/impact/casestudy/skillmatics-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

