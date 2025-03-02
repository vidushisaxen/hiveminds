/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Crompton",
    subtitle2: "Heats Up",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Innovative assortment strategy sustains year-round demand. <br/> <br/> Crompton turns up the heat by ranking #1 in water heaters while propelling sales growth by 32%</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 32% </span>  Sales Growth</p>",
    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Assortment: Focused Sub-Category",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Crompton faced a 25% seasonal drop in water heater user visits, risking brand consideration during off-seasons and reducing overall glance views.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>Crompton segmented water heater demand into two categories: low capacity, which remains stable year-round, and high capacity, which peaks in winter.<br/><br/> Recognizing a significant opportunity, they increased product assortment for low capacity models. Simultaneously, we deployed Amazon Display campaigns to maintain robust ad spends during off-seasons, ensuring consistent visibility. <br/><br/> This targeted, data-driven approach allowed Crompton to dominate share of voice, mitigate seasonality, and drive sustained sales growth across the category. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved an impressive <span class='text-primary !font-medium'> 32% sales growth </span> by maintaining consistent off-season visibility, establishing Crompton as the <span class='text-primary !font-medium'> #1 brand </span> in water heaters year-round.</p>"

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
                <Hero title1={"Crompton"} title2={""} img={"/assets/images/impact/casestudy/crompton-cs.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

