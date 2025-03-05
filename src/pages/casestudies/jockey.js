/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim,lineAnim } from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Jockey",
    subtitle2: "Visual Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Innovative imagery drives 4x brand growth.<br/><br/> Jockey achieves brand growth through innovative, creative experimentation. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 4x </span> Brand Growth</p>",
    ],
    industry: "Fashion & Lifestyle",
    service: "Marketplace",
    category: "Catalogue Tactics",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Jockey needed to determine the best creative approach for higher click-through rates and improved engagement, as initial product images lacked a human element.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We implemented an A/B testing strategy on two product images for Jockey. One image omitted the model's full face, while the other showcased it clearly. <br/><br/>This controlled experiment measured click-through rates and engagement levels. The data revealed that including a human element in product imagery significantly enhanced user interaction. <br/><br/>Further, supplementary video content increased on-page time and product understanding, ultimately driving customer consideration and purchase intent. This comprehensive strategy empowered Jockey to refine their creative direction and achieve remarkable results.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The experiment led to a <span class='text-primary !font-medium'> 4x </span> brand growth by enhancing engagement and boosting click-through rates. User-friendly visuals and video content significantly increased product consideration..</p>"

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
                <Hero title1={"Jockey"} title2={""} img={"/assets/images/impact/casestudy/jockey-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

