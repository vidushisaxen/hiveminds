/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Bajaj ",
    subtitle2: "Seasonal Win",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Early activation drives 50% YoY growth. <br/> <br/> Bajaj secures #1 in personal coolers while achieving 50% YoY growth in offtakes.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 50% </span> YoY Growth in Offtakes</p>",
    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Seasonal Marketing",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Air coolers have a limited seasonal window, with demand peaking in summer. Dominant competitors capture 50% market share, restricting volume buildup for new entrants.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We capitalized on untapped latent demand by initiating early seasonal campaigns to build momentum. <br/> <br/> Our strategy involved launching targeted activations ahead of peak demand, revamping product pages based on customer sentiments, and benchmarking competitors. <br/> <br/> Enhanced content and organic visibility further cultivated brand prominence. This comprehensive approach ensured superior GMV and solidified Bajaj’s market dominance during the critical seasonal window. </p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved #1 rank on personal coolers, #2 on dessert coolers, with a <span class='text-primary !font-medium'> 50% </span>YoY increase in offtakes.</p>"

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
                <Hero title1={"Bajaj"} title2={"Seasonal Win"} img={"/assets/images/casestudy/bigbasket-casestudy.png"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

