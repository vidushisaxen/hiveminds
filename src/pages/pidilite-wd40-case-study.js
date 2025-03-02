/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Pidilite WD40 ",
    subtitle2: "Horizons",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Strategic nodes drive best-seller success.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 34%</span> Sales Increase; <span class='text-primary'>6x </span>Impressions; Best Seller in 2 Months</p>",
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Node Expansion",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>WD-40, a multi-use product with 2000+ applications, was confined to one category due to platform restrictions, limiting its consumer reach</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We conducted an in-depth analysis of Amazon search queries to identify pertinent nodes beyond the primary category—specifically, Grease & Lubricants and Car & Bike Care. Tailored content was crafted for these affinity nodes, targeting new consumer segments and expanding reach. This focused strategy enhanced product visibility and engagement, unlocking new sales opportunities and driving significant performance improvements.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary'> 34%</span> sales increase and a <span class='text-primary'>6x </span> boost in impressions, with WD-40 earning Best Seller status in just 2 months.</p>"

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
                <Hero title1={"Pidilite"} title2={""} img={"/assets/images/casestudy/bigbasket-casestudy.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

