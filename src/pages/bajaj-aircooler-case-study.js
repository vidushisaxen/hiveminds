/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Bajaj’s Cooler ",
    subtitle2: "Visibility",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Enhanced visuals drive search dominance.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> Top 10 Search Ranking; <span class='text-primary'> 70% </span> Increase in Brand Shares</p>",
    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Getting The Bestseller Rank",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Bajaj Air Cooler’s product page suffered from low conversion rates due to insufficient visual appeal and content, negatively impacting consumer consideration and search ranking.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We conducted comprehensive research on the air cooler category, analyzing competitor bestsellers and consumer search patterns to pinpoint high-impact keywords.  <br/> <br/> Using these insights, we developed a structured content sequence emphasizing critical features such as capacity, warranty, and technology. <br/> <br/> In addition, we enhanced the product listing with high-quality images and informative infographics to significantly boost visual appeal and drive increased consumer engagement and conversion rates. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved Top 10 search ranking for the Hero product with a <span class='text-primary'> 70% </span> increase in brand shares, significantly enhancing consumer visibility and driving higher conversions.</p>"

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
                <Hero title1={"Bajaj"} title2={"Air Cooler"} img={"/assets/images/impact/casestudy/bajaj-cs.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

