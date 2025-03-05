/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Skinn Fragrance",
    subtitle2: "Breakthrough",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Festive campaign sparks fragrance revolution. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'> 15.7M </span>  Reach in 1 Month</p>",
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'> 43% </span> Rise in Branded Search Volume</p>",

      
    ],
    industry: "Fashion & Lifestyle",
    service: "Branding",
    category: "Launch Collection",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Skinn by Titan needed to build awareness and secure market space in the competitive perfume industry during the festive season, while driving new buyer influx.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We executed a multi-channel strategy by bifurcating touchpoints into OTT, RTB, and impact activations. <br/><br/> Leveraging the ICC Cricket World Cup, we maximized ad recall among a vast audience. <br/><br/>Creative communications used a blend of static and video formats showcasing Skinn’s top products to build consideration and brand relatability across diverse channels.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Delivered <span class='text-primary'> 15.7M</span> reach in one month and achieved a <span class='text-primary'> 43%</span>, increase in branded search volume, marking record engagement."
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

