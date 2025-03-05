/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Max Life ",
    subtitle2: "Revenue Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Innovative PPC campaign fuels revenue surge.<br/><br/>Maxlife achieves a 45% revenue surge in 3 months on their FD schemes.  </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 45% </span> revenue surge in 3 months</p>",
        "<p class='text-[1.5vw] py-[1vw]'> FD scheme boost</p>",

    ],
    industry: "BSFI/ Fintech",
    service: "PPC / Lead Generation",
    category: "Lead Generation",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Max Life Insurance struggled to generate leads for their FD scheme as traditional channels failed to drive engagement and revenue in a competitive BFSI market.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We implemented a targeted, data-driven PPC strategy tailored to Max Life’s FD scheme.Our approach focused on targeting high-income users through a full-funnel strategy, optimizing ad creatives and bidding processes.<br/> We diversified our channel mix by leveraging investment-focused platforms like Moneycontrol, Times Now, and Livemint while emphasizing superior returns in our messaging, resulting in a significant boost in high-quality leads. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a <span class='text-primary !font-medium'> 45% </span>revenue surge in three months, with the savings business growing to 33% of overall digital revenue, driving sustained financial growth.</p>"

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
                <Hero title1={"Max"} title2={"Life"} img={"/assets/images/impact/casestudy/max-life-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

