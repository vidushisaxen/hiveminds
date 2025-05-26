import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Content from '@/components/IndustryDetail/Content'
import Hero from '@/components/IndustryDetail/Hero'
import Layout from '@/components/Layout'
import React from 'react'

const industryDetail = () => {
     headingAnim();
      fadeUp();
    return (
        <>
            <Layout>
                <Hero title1={"Automobiles"} img={"/assets/images/industry/automobiles-detail.png"} />
                <Content sections={sections} />
            </Layout>
        </>
    )
}

export default industryDetail

const sections = [
    {
        heading: "Startup",
        ref: "startupRef",
        id: "stage-startup",
        images: [
            {
                link: "#",
                img: "/assets/images/industry/dominos.png",
                title: "Dominos"
            },
            {
                link: "#",
                img: "/assets/images/industry/fly-dubai.png",
                title: "Fly dubai"
            },
            {
                link: "#",
                img: "/assets/images/industry/saffola-honey.png",
                title: "Saffola Honey"
            },
            {
                link: "#",
                img: "/assets/images/industry/big-basket.png",
                title: "Big Basket"
            },
        ],
        content: [
            "Accelerated SEO + High Performance",
            "Through immersive campaigns, lead gen tools, and smart targeting, we bring showroom experiences online.",
            "Our creative assets are built to inspire and convert — whether it’s a test drive, a visit, or a call.",
        ],
    },
    {
        heading: "Growth",
        ref: "growthRef",
        id: "stage-growth",
        images: [
            {
                link: "#",
                img: "/assets/images/industry/dominos.png",
                title: "Dominos"
            },
            {
                link: "#",
                img: "/assets/images/industry/fly-dubai.png",
                title: "Fly dubai"
            },
            {
                link: "#",
                img: "/assets/images/industry/saffola-honey.png",
                title: "Saffola Honey"
            },
            {
                link: "#",
                img: "/assets/images/industry/big-basket.png",
                title: "Big Basket"
            },
        ],
        content: [
            "High Performance + Branding",
            "Contribute for Organic SEO",
            "Social Media",
        ],
    },
    {
        heading: "Matured",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "#",
                img: "/assets/images/industry/dominos.png",
                title: "Dominos"
            },
            {
                link: "#",
                img: "/assets/images/industry/fly-dubai.png",
                title: "Fly dubai"
            },
            {
                link: "#",
                img: "/assets/images/industry/saffola-honey.png",
                title: "Saffola Honey"
            },
            {
                link: "#",
                img: "/assets/images/industry/big-basket.png",
                title: "Big Basket"
            },
        ],
        content: [
            "High Performance + Branding",
            "Contribute for Organic SEO",
        ],
    },
];