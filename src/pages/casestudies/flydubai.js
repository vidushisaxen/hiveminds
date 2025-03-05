/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Flydubai ",
    subtitle2: "Soars High",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>PPC strategy boosts breakthrough awareness. <br/><br/> Fly Dubai soars high as it achieves 67% growth in brand searches with the introduction of new routes to Maldives and Sri Lanka </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 67% </span> Increase in Brand Searches</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> New routes: </span> Maldives &amp; Sri Lanka</p>",

    ],
    industry: "Travel & Tourism",
    service: "PPC",
    category: "Brand Awareness",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Flydubai struggled to boost brand awareness as existing campaigns underemphasized its new routes, limiting engagement in emerging travel markets.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We implemented a highly targeted, data-driven PPC campaign that spotlighted Flydubai’s new routes. Through rigorous optimization of ad placements, strategic budgeting, and compelling creative messaging, we elevated campaign relevance across key markets. <br/><br/>  Our approach leveraged real-time analytics to continuously refine strategies, ultimately driving a 67% surge in brand searches and significantly boosting overall engagement and awareness, ensuring maximum impact across markets.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The targeted PPC campaign resulted in a <span class='text-primary !font-medium'> 67% surge </span> in brand searches, dramatically elevating overall brand awareness and setting the stage for long-term market growth..</p>"

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
                <Hero title1={"Fly"} title2={"Dubai"} img={"/assets/images/impact/casestudy/flydubai-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

