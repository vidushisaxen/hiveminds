/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Culture from '@/components/Careers/Culture';

const careers = () => {
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();
    return (
        <>
            <Layout>
                <Hero title1={"Careers"} title2={"With Us"} para={"Join HiveMinds, where creativity, data, and innovation converge. Our collaborative team drives digital transformation with passion and purpose, offering dynamic careers that empower you to shape the future of marketing."} img={img} />
            <Culture/>
            </Layout>
        </>
    )
}

export default careers
