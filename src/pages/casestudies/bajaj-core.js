/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'
const content = {
    subtitle1: "Bajaj Core  ",
    subtitle2: "Dominance",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Dominating core categories with top product rankings.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> 3 products in Top 5 <span class='text-primary'> Top 5 </span></p>",
        "<p class='text-[1.5vw] py-[1vw]'> 1 product ranked <span class='text-primary'> #1 </span></p>",

    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Getting The Bestseller Rank",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Until 2021, Bajaj relied on organic strength, but in 2022, limited budgets and aggressive competitors challenged its quest for top positions in core categories.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We fine-tuned content to align with customer FAQs and Bajaj’s unique selling propositions, attracting new audiences and driving increased offtakes. Visibility was maximized during peak hours while ensuring healthy gross volumes and avoiding internal cannibalization. This strategic content and timing approach enabled Bajaj to overcome budget constraints and secure a dominant position in the market.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary'> #1 ranked </span> product in core categories, with three products in the top five and highest clicks on generic keywords.</p>"

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
                <Hero title1={"Bajaj"} title2={"Core"} img={"/assets/images/impact/casestudy/bajaj-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

