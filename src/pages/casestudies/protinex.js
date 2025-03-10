/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim,lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Protinex SKU ",
    subtitle2: "Breakout",
    intro: "<p class='mobile:mt-[7vw] mt-[2vw]'>Demerger doubles ad share and visibility.<br/><br/>Protinex sees a<span class='text-primary'> 2x </span> growth in ad share of voice of the brand in just 6 months, doubling the impact. </p>",
    features:[
        "<p class=' py-[1vw]'><span class='text-primary'>2.14x</span> Improvement in SoV; <span class='text-primary'>20% </span>Lower Spend</p>",
      
    ],
    industry: "Health & Wellness",
    service: "Marketplace",
    category: "Assortment - Demerging ASINs",
    problem: " <p class=' mt-[2vw]'>Protinex's Adult Nutrition Range had SKUs consolidated into one Parent ASIN, limiting ad slot coverage and reducing share of voice while competitors captured branded keywords.</p>",
    approach: "<p class=' mt-[2vw]'>Our approach focused on demerging consolidated SKUs into independent variants to enhance advertising flexibility and secure more ad slots.   <br/><br/>We restructured the product mix by isolating high-ASP variants, thereby preventing competitor encroachment on branded keywords. This allowed us to target a broader range of search queries and optimize our advertising product mix, resulting in increased visibility and improved ad performance.  <br/><br/>Strategic adjustments to product listings led to a significant boost in first-page share of voice with lower overall spend.</p>",
    impact: "<p class=' mt-[2vw]'>By demerging SKUs, Protinex achieved a <span class='text-primary'>2.14x</span> improvement in first-page SoV with <span class='text-primary'>20% </span> lower spend, dramatically enhancing ad performance and market visibility.</p>"

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
                <Hero title1={"Protinex "} title2={""} img={"/assets/images/impact/casestudy/protinex-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

