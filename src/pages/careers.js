/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Culture from '@/components/Careers/Culture';
import Jobs from '@/components/Careers/Jobs';
import Contact from '@/components/Careers/Contact';
import Metadata from '@/components/Metadata';
import { WebpageJsonLd } from '@/lib/json-ld';

const metadata={
    title:"HiveMinds Careers | Join Our Innovative Digital Team",
    metaDescription:"Explore career opportunities at HiveMinds. Join our team to drive digital transformation, innovate in marketing, and grow your career in a collaborative environment.",
    path:"careers",
    img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
}
const careers = () => {
    headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();

    return (
        <>
        <Metadata metadata={metadata}/>
        <WebpageJsonLd metadata={metadata}/>
            <Layout>
                <Hero title1={"Careers"} title2={"With Us"} para={"Join HiveMinds, where creativity, data, and innovation converge. Our collaborative team drives digital transformation with passion and purpose, offering dynamic careers that empower you to shape the future of marketing."} img={img} />
                <Culture />
                <Jobs />
                <Contact />
            </Layout>
        </>
    )
}

export default careers
