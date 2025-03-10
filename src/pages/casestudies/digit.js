/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Digit",
    subtitle2: "Organic Surge",
    intro: "<p class=' mt-[2vw] mobile:mt-[7vw]'>Thematic strategy powers organic search growth.<br/><br/>Digit Insurance powers up Organic search and achieves 46 million Impressions in 12 months. </p>",
    features:[
        "<p class=' py-[1vw]'><span class='text-primary'> 46M </span> Impressions in 12 Months</p>",
    ],
    industry: "BFSI - Fintech",
    service: "SEO",
    category: "Improve Organic Presence",
    problem: " <p class=' mt-[2vw]'>Digit Insurance needed a comprehensive SEO strategy to improve organic presence and boost visibility in a competitive BFSI landscape within 12 months.</p>",
    approach: "<p class='mt-[2vw]'>We implemented a two-tiered thematic content strategy. <br/><br/>In Phase One, we targeted queries directly related to core insurance services such as cars, bikes, and insurance guides. <br/><br/>In Phase Two, we expanded coverage to parallel topics including government schemes, tax guides, and road tax.<br/><br/>By strategically structuring our content, we enhanced keyword coverage and user engagement, driving sustained improvements in organic search visibility. </p>",
    impact: "<p class='mt-[2vw]'>Uploaded over 1,200 articles across 80+ categories, achieving a <span class='text-primary !font-medium'> 62% increase </span> in clicks and a <span class='text-primary !font-medium'> 144% boost </span> in impressions YoY.</p>"

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
                <Hero title1={"Digit"} title2={""} img={"/assets/images/impact/casestudy/digit-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

