/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Flipkart Health+ ",
    subtitle2: "App Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Leveraging innovative PPC strategies, Flipkart Health+ achieved record-breaking app installs<br/><br/> Maintaining the position of India’s #1 Medical App for 1.5 years, Flipkart Health+ stays ahead while increasing growth in installs by 2x</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> Ranked <span class='text-primary'> #1 </span> for 1.5 years</p>",
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 2x </span>  install growth</p>",

    ],
    industry: "E-commerce",
    service: "PPC / Performance Marketing",
    category: "App Installs",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Flipkart Health+ struggled to significantly boost app installs beyond its core user base. Conventional campaigns failed to tap emerging markets, limiting rapid expansion in a highly competitive digital landscape.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We implemented a data-driven PPC strategy with a hyper-targeted approach to drive installs and engagement. <br/><br/> <ul class='list-disc px-[1.5vw]'><li class='text-[1.5vw]'><span class='!font-medium'>Choosing the Right Market : </span> Focused on regions with high category penetration but low brand adoption and leveraged Flipkart’s existing brand presence to maximize impact.</li><li class='text-[1.5vw]'><span class='!font-medium'>Channel Innovation: </span> Expanded beyond traditional platforms, introducing affiliates, Bing, and Apple Search Ads to acquire new users efficiently.</li><li class='text-[1.5vw]'><span class='!font-medium'>Cohort Capitalization:</span> Utilized Flipkart’s brand salience to optimize performance on Google and Meta channels.</li> <li class='text-[1.5vw]'><span class='!font-medium'>RIGOR through Aggressive Experimentation</span> Strategically planned media-heavy sales periods to accelerate adoption and maximize conversions.</li></ul></p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved a sustained growth with <span class='text-primary !font-medium'> record-breaking </span> app installs and market expansion. </p>"

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
                <Hero title1={"Flipkart"} title2={"Health+"} img={"/assets/images/impact/casestudy/flipkart-healthplus-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

