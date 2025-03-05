/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim,lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Dominos App ",
    subtitle2: "Efficiency",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Personalized deals boost app orders. <br/><br/> Dominos App sees a 33% reduction in cost after personalised deals. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 500K+ </span> New Orders in 12 Months</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 33% </span> Cost Reduction</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 1.6%  </span> ROAS Increase</p>",
    ],
    industry: "E-Commerce",
    service: "PPC",
    category: "App Orders",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Dominos aimed to capture market share in India's QSR space by aggressively acquiring app users, redirecting them from aggregator apps to its own dedicated app.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We implemented a three-pronged strategy: First, we created customized event signals by introducing “First Order” and “AOV > 500” events to optimize app user acquisition.  <br/><br/> Next, we developed sharp audience segments including festive buyers, BDI-CDI cohorts, and existing users. <br/> <br/> Finally, we launched exclusive app offers not available on aggregators, driving loyalty and engagement through personalized deals and targeted messaging. This holistic, data-driven approach maximized conversions and optimized cost efficiency.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The strategy resulted in a  <span class='text-primary !font-medium'> 221% </span> increase in first orders, a 33% reduction in cost per order, and a 1.6% rise in ROAS, significantly boosting app performance. </p>"

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
                <Hero title1={"Dominos"} title2={""} img={"/assets/images/impact/casestudy/dominos-efficiency.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

