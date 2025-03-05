/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Murf AI ",
    subtitle2: "Ascends",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>10x traffic growth drives search dominance.<br/><br/>Murf. AI finds its share in the speech synthesis market while driving significant growth in traffic. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 10x </span> Growth in Traffic</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 90% </span> Keyword Coverage</p>",

    ],
    industry: "International",
    service: "SEO",
    category: "Search Share",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Legacy players dominated the speech synthesis market, making it challenging for new entrant Murf AI to capture meaningful search share.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We adopted a multi-pronged, data-driven approach. <br/><br/>First, we implemented a user-centric content strategy addressing real customer queries on AI text-to-speech. <br/><br/>Next, we partnered with leading online publishers to boost domain authority and awareness. <br/><br/>We reinforced strong E-A-T signals by showcasing our expertise, and optimized our website for speed and stability through rigorous technical audits.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary !font-medium'> 10x growth </span>in traffic and 90% keyword coverage, establishing Murf AI as a leading innovator in the speech synthesis market.</p>"

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
                <Hero title1={"Murf."} title2={"Ai"} img={"/assets/images/impact/casestudy/murfai-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

