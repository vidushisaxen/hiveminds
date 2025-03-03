/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Domino’s",
    subtitle2: "Orders Unleashed",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Influencer partnerships fuel scalable order growth.<br/><br/> Dominoes driving success with 500K+ new orders in 12 months.  </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 500K+ </span> New Orders in 12 Months</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> High </span> Conversion Rates Achieved</p>",

    ],
    industry: "E-Commerce",
    service: "Affiliates / Influencers",
    category: "Affiliates ",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Domino’s experienced stagnant online order growth as traditional channels failed to convert digital traffic, hindering sales despite a robust product portfolio.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We executed a holistic influencer and affiliate strategy, leveraging performance analytics to optimize creative content and audience segmentation.<br/><br/> Using a cost-per-acquisition model, payments were strictly performance-based. Through extensive testing of content, influencer profiles, and geographic targeting, we identified scalable patterns. <br/> <br/>Our integrated approach seamlessly combined creative optimization with rigorous performance tracking, ensuring continuous refinement and exponential order growth. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved over 500K orders, onboarded <span class='text-primary !font-medium'> 15K+ </span> influencers, and delivered <span class='text-primary !font-medium'> 500K+ </span> premium app installs, fueling transformative digital engagement and accelerating global performance growth. </p>"

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
                <Hero title1={"Dominos"} title2={""} img={"/assets/images/impact/casestudy/dominos-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

