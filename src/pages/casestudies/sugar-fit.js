/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Sugar.fit",
    subtitle2: "Success",
    intro: "<p class='mobile:mt-[7vw] mt-[2vw]'>Transforming diabetes reversal with smart, data-driven marketing.</p>",
    features: [
        "<p class=' py-[1vw]'><span class='text-primary'> 1 Lakh+ </span> Downloads in a Year</p>",
    ],
    problem: "<p class=' mt-[2vw]'>Sugar.fit, a new diabetes reversal brand, struggled with minimal category awareness and strict digital ad policies, hindering its launch and growth.</p>",
    approach: "<p class=' mt-[2vw]'>We implemented a data-driven strategy to expand Sugar.fit’s audience by analyzing organic customer insights. <br/><br/> Our channel mix evolved from core platforms to include additional engagement channels, targeting customers based on specific interests. <br/><br/> We conducted creative experiments, developing content that clearly communicated the benefits of diabetes reversal and Sugar.fit’s unique value proposition, resulting in highly resonant messaging across all digital touchpoints.</p>",
    impact: "<p class=' mt-[2vw]'>Our targeted strategy generated over <span class='text-primary !font-medium'> 1 Lakh </span> downloads in one year, significantly boosting brand recognition and empowering Sugar.fit to transform lives through effective diabetes reversal solutions.</p>",
    industry: "Health & Wellness",
    service: "PPC",
    category: "Brand Searches"
};

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
                <Hero title1={"Sugar."} title2={"Fit"} img={"/assets/images/impact/casestudy/sugar-fit-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

