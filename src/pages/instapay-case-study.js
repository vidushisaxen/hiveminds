/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Instapay ",
    subtitle2: "Digital Leap",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Simplified remittance drives digital adoption. <br/><br/>Instapay becomes the go-to app for migrant workers in Malasia with over 1 Lakh downloads in a year</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 25K+ </span> leads</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 3.5M </span> awareness</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 1L+ </span> downloads</p>",

    ],
    industry: "BFSI - Fintech",
    service: "PPC / Lead Gen",
    category: "Lead Gen",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Instapay aimed to drive financial inclusion for Malaysian migrant workers by simplifying digital remittance communication, overcoming language and cultural barriers.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>To drive awareness, we developed visually engaging, easily understandable content—including how-to videos, guides, and explainers—all communicated in vernacular languages to resonate culturally. To enhance consideration, we hosted live Facebook Q&A sessions providing real-time clarity. For acquisition, we executed targeted paid ad campaigns across social platforms, maximizing reach and driving substantial traffic to Instapay.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Our integrated approach generated over <span class='text-primary !font-medium'> 25K quality leads </span>, reached 3.5M potential users, and drove 1L+ app downloads within one year, transforming financial inclusion.</p>"

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
                <Hero title1={"Instapay"} title2={""} img={"/assets/images/casestudy/bigbasket-casestudy.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

