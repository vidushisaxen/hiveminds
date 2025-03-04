/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "WD40 Consumer ",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Expanding household recognition with enhanced A+ content. <br/><br/> Pidilite boosts recognition and utilization with a 17% increase in conversions. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 17%</span> Increase in Conversions </p>"
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "A+ Content",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Despite being celebrated for over 2000 applications, WD40 was primarily known as a B2B product, with minimal consumer awareness hindering its household utilization.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We developed rich A+ content incorporating detailed text widgets and high-quality usage images to effectively showcase WD40's multi-application benefits for household consumers. <br/><br/> This strategy was bolstered by a targeted expansion of keywords across new consumer categories—including rust removal, bike maintenance, and chimney cleaning—to bridge the gap between B2B familiarity and consumer adoption, driving improved conversion rates.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a remarkable<span class='text-primary'> 17%</span> increase in conversions in three months, significantly boosting household adoption and expanding WD40's consumer market share.</p>"

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
                <Hero title1={"Pidilite"} title2={"WD40"} img={"/assets/images/impact/casestudy/pidilite-consumer.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

