/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import React, { useEffect } from 'react'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
import Hero from '@/components/Hero';
import Image from 'next/image';
import img from '../../public/assets/images/careers/careers-hero-img.png'
import Culture from '@/components/Careers/Culture';
import Jobs from '@/components/Careers/Jobs';
import Contact from '@/components/Careers/Contact';
import gsap from 'gsap';

const careers = () => {
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();

    useEffect(() => {
        gsap.to(".blue-hexagon-animation", {
            y: "15px", // Move up & down
            duration: 2,
            repeat: -1, // Infinite loop
            yoyo: true, // Smooth back-and-forth motion
            ease: "sine.inOut", // Smooth ease
        });

        gsap.to(".yellow-hexagon-animation", {
            y: "-15px", // Move opposite direction
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);
    return (
        <>
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
