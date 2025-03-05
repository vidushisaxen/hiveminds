/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "GHA ",
    subtitle2: "Booking Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Affordable stays drive 96% booking surge. <br/><br/>GHA Discovery sees unmatched growth with a 96% increase in bookings under $120 in just 3 months with affordable stays. </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'><span class='text-primary'> 96% </span> Increase in Bookings Under $120 (3 Months)</p>",
    ],
    industry: "Travel & Tourism",
    service: "PPC",
    category: "Incremental Bookings",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>GHA Discovery needed to garner incremental bookings without inflating cost per booking, ensuring sustained market growth in a competitive travel landscape.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>Our approach focused on three key pillars. First, we targeted high-performing locations by deploying a full-funnel strategy—from app installs and sign-ups to website traffic and bookings—ensuring we reached high-intent users. <br/><br/> Second, we optimized our channel mix using platforms such as Google Search, PMax, VAC, Discovery, UAC, and Meta to maximize incremental bookings. <br/><br/>Finally, we drove engagement by promoting exclusive offers and flash sales, reinforcing GHA Discovery’s unique value proposition.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>The campaign drove a <span class='text-primary !font-medium'> 96% increase </span> in bookings under $120 over 3 months, with October emerging as the best performing month, significantly boosting GHA Discovery's market share.</p>"

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
                <Hero title1={"GHA"} title2={"Discovery"} img={"/assets/images/impact/casestudy/discovery-cs-hero.jpg"} />
                <Expanding content={content} />
                <MoreCs/>
            </Layout>
        </>
    )
}

export default index;

