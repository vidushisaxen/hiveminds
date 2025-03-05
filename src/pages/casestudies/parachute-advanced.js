/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Parachute Premium",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Premium packs drive <span class='text-primary'> 60% </span>ACOS growth.<br/><br/>Parachute Advanced achieves <span class='text-primary'> 60% </span> ACOS growth driven by a new e-commerce specific pack. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'>Maintained<span class='text-primary'> 60% </span> ACOS growth</p>",
      
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Catalogue Tactics",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Parachute’s standard GT/MT packs diluted margins, necessitating a premium e-commerce-specific launch to boost profitability and secure independent pricing control.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We introduced a premium version of Parachute's famed hair oil variant exclusively for e-commerce.  <br/><br/>This higher-margin pack enabled us to determine the ideal price point while increasing monthly offtakes. <br/><br/>By launching online, the brand maintained control over pricing without GT/MT interference, thereby enhancing overall profitability through targeted catalogue tactics and clear consumer insights.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The initiative achieved a <span class='text-primary !font-medium'> 60% </span>ACOS growth, significantly boosting profitability and positioning Parachute as a leader in e-commerce product innovation.</p>"

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
                <Hero title1={"Parachute "} title2={""} img={"/assets/images/impact/casestudy/parachute-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

