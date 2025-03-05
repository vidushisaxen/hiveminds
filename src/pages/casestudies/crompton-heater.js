/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Crompton Heater ",
    subtitle2: "Leader",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Unbundled strategy secures top spot.</p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> #1 </span> in Water Heaters</p>",
        "<p class='text-[1.5vw] py-[1vw]'>Conversion rates exceed category average</p>",

    ],
    industry: "Electronics & Consumer Durables",
    service: "Marketplace",
    category: "Becoming the Market Leader",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Crompton dominated the fans category on Amazon India but lagged in water heaters. They aimed to become the #1 water heater brand despite intense competition and budget constraints.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We increased Amazon shelf share by unbundling water heater products, ensuring higher search rankings and more ad slots. Enhanced product pages with targeted SEO and keyword optimization boosted conversion rates significantly. Strategic display advertising effectively captured new customer segments, reinforcing overall market presence. This comprehensive, multi-channel approach drove increased clicks, glance views, and ultimately secured the top position in the highly competitive water heater category.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Achieved  <span class='text-primary !font-medium'> Achieved #1 brand status with conversion rates surpassing category benchmarks and enhanced visibility, establishing Crompton as the  <span class='text-primary !font-medium'> dominant </span> water heater brand on Amazon India.</p>"

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
                <Hero title1={"Crompton"} title2={""} img={"/assets/images/impact/casestudy/crompton-heater-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

