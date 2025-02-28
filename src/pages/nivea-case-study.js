/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Nivea Summer ",
    subtitle2: "Standout",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Ad mix change drives seasonal dominance.<br/><br/>Nivea retains their position as top 3 as competitors declined by 34% and 42%.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'>Maintained<span class='text-primary'> Top 3 </span> Rank</p>",
        "<p class='text-[1.5vw] py-[1vw]'>Nivea retains their position as top 3 as competitors.<span class='text-primary'>  declined by 34% and 42%. </span></p>",
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Assortment: Change in Product Mix",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>In summer 2022, the body lotion category lost 55% of its audience, with Nivea’s share dipping by 50%, threatening brand retention in a highly seasonal market.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We shifted the ad product mix from winter to summer packs. Budget allocation for white packs was increased from 10–12% to 80–90% starting mid-March, with pre-summer promotions for lower pack sizes initiated in late February. <br/><br/>We targeted season-specific and competitor-related keywords, and leveraged Sponsored Brand and Video ads to boost awareness and CTR beyond category benchmarks.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Maintained <span class='text-primary !font-medium'> Top 3 </span>iranking and outperformed competitors, effectively buffering seasonal drops with enhanced engagement and repeat purchases.</p>"

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
                <Hero title1={"Nivea"} title2={""} img={"/assets/images/casestudy/bigbasket-casestudy.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

