/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Nivea Efficiency ",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Optimized efficiency fuels 142% customer growth.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 142% </span> Customer Growth</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 33% </span> Sales Increase</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 95% </span> Reduction in Reporting Time</p>",

    ],
    industry: "FMCG & Beauty",
    service: "Analytics",
    category: "Bidsmart",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Nivea struggled with ad-spend spillage due to stock unavailability, leading to inefficient ad spending and reduced campaign performance in a competitive market.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We leveraged real-time reporting to monitor out-of-stock products, ensuring prompt updates. Utilizing our proprietary Buybox tool, we tracked product sales within our ad account to gain granular insights. <br/><br/> We restructured the product mix to optimize inventory alignment and minimize ad-spend spillage. <br/><br/> This comprehensive, data-driven approach maximized operational efficiency, leading to significant customer growth and improved campaign performance.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Our strategy boosted sales of Growth & Focus products by 33% and reduced report generation time by <span class='text-primary !font-medium'>  95% </span>, significantly enhancing overall campaign efficiency.</p>"

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
                <Hero title1={"Nivea"} title2={""} img={"/assets/images/impact/casestudy/nivea-efficiency.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

