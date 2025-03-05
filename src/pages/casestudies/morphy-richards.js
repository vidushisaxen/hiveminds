/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Morphy Richard’s ",
    subtitle2: "Grooming Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>10x growth redefines grooming market.<br/><br/>Morphy Richards redefines the personal grooming market with 10x growth in just 2 months. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 10x </span>  growth in 2 months</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 4% </span>  market share in 4 months</p>",

    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Product Launch on Ecommerce",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Morphy Richards aimed to penetrate the personal grooming market via ecommerce channels; however, its legacy as a kitchen appliances brand and fierce competition posed significant challenges.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We executed a multi-channel strategy on Amazon, engaging in-market consumers using diverse ad formats and targeted keyword campaigns. <br/><br/>On-platform initiatives included a comprehensive range showcase via quad creatives, complemented by off-platform retargeting to enhance consumer journeys. <br/><br/>We launched Amazon’s first Virtual Grooming Store to reach core audiences and partnered with micro influencers to generate buzz, while strategically promoting kit products to capitalize on emerging grooming trends.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary !font-medium'> 10x growth </span>rin brand business within 2 months, capturing 4% market share in 4 months and establishing Morphy Richards as a leader in personal grooming.</p>"

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
                <Hero title1={"Morphy"} title2={"Richards"} img={"/assets/images/impact/casestudy/morphy-richard-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

