/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim,lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Dr.Agarwal ",
    subtitle2: "Appointment Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Cost-effective PPC drives efficient appointments. <br/><br/>Dr. Agarwal’s makes healthcare affordable by hitting a 50% reduction in appointment costs.  </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 50% </span> Reduction in Appointment Costs</p>",
    ],
    industry: "Health & Wellness",
    service: "PPC / Lead Gen",
    category: "Lead Gen ",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Dr Agarwal’s Eye Hospital needed to boost appointment rates using cost-effective outreach, balancing higher patient volume with operational efficiency amid rising healthcare costs.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We launched a multi-faceted PPC campaign focused on local resonance and precision targeting. <br/><br/> Creatives and copies were crafted in the local language and featured regional celebrities to enhance authenticity. <br/><br/>A quality check field was integrated into lead forms to streamline conversions, while radius-based targeting for branch clusters ensured localized outreach<br/><br/>This comprehensive, data-driven strategy optimized both appointment volume and quality.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary !font-medium'>  2.1x increase </span> in appointments, a 58% cost reduction, and a <span class='text-primary !font-medium'> 99% </span> improvement in lead-to-conversion rate. </p>"

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
                <Hero title1={"Dr."} title2={"Agarwal"} img={"/assets/images/impact/casestudy/dragarwal-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

