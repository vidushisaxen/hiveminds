/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim , lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "BigBasket Expanding  ",
    subtitle2: "New Horizons",
    intro: "<p class=' mt-[2vw] mobile:mt-[7vw]'>Breakthrough strategy fuels new user growth. <br/> <br/> BigBasket expands horizons in Non-Metro and Tier-2 cities with a 2.35x increase in installs with precision targeting.</p>",
    features:[
        "<p class='py-[1vw]'><span class='text-primary'> 2.35x </span> Increase in Installs</p>",
        "<p class=' py-[1vw]'> Rapid Expansion in <span class='text-primary'> Tier-2 Markets </span> </p>",
    ],
    industry: "E-commerce",
    service: "Retail/ E-commerce",
    category: "New User Acquisition",
    problem: " <p class=' mt-[2vw]'>BigBasket struggled to penetrate non-metro markets with traditional campaigns, hindering new user acquisition and growth in T2, T3, and T4 regions.</p>",
    approach: "<p class=' mt-[2vw]'>We executed a robust, data-driven PPC campaign tailored for non-metro regions. Our approach optimized creative elements and refined targeting strategies to meet local preferences. <br/><br/> We deployed separate campaigns to allocate budget effectively across T2 and T3 cities, avoiding dilution with T1 markets. <br/><br/>Additionally, we leveraged 1P audience signals, incorporating one-year user email IDs and contact numbers to drive high-conversion campaigns. <br/>We further ensured optimal budget allocation through detailed regional analysis, resulting in highly targeted messaging that resonated deeply with consumers across non-metro markets.</p>",
    impact: "<p class=' mt-[2vw]'>Our targeted strategy resulted in a <span class='text-primary !font-medium'> 2.35x </span> surge in installs and a <span class='text-primary !font-medium'> 2.1x </span> increase in the new customer base, dramatically expanding BigBasket’s reach in non-metro markets.</p>"

}

const index = () => {
    const [isOpen, setIsOpen] = useState(false);
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();
    lineAnim();
    return (
        <>
            <Layout isOpen={isOpen}>
                <Hero title1={"Big"} title2={"Basket"} img={"/assets/images/impact/casestudy/bigbasket-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

