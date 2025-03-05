/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim, lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Tanishq Footfall",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Smart campaigns drive store walk-ins. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'> 63,000</span> Store Walk-ins; RoAS <span class='text-primary'>667X</span></p>",
      
    ],
    industry: "Fashion & Lifestyle",
    service: "Branding",
    category: "Improved Sales Share on Amazon US and India",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Tanishq needed to create strong awareness and drive store visits, converting digital interactions into tangible in-store footfall amid competitive market challenges.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We began by optimizing high-quality Google Business Store listings to ensure best conversion rates, then launched AI-powered Performance Max campaigns targeted at driving store visits. Our strategy focused on delivering store-specific messaging and precise location targeting while leveraging Google Ads to measure store visits and sales. Campaign performance was monitored to optimize budget allocation and boost store engagement.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Users were directed to nearby store listings, resulting in <span class='text-primary'> 63,000</span> walk-ins with a RoAS of <span class='text-primary'>667X</span>, proving the effectiveness of our targeted in-store awareness strategy.</p>"

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
                <Hero title1={"Tanishq"} title2={""} img={"/assets/images/impact/casestudy/tanishq-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

