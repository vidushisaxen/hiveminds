import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import Content from '@/components/IndustryDetail/Content'
import Hero from '@/components/IndustryDetail/Hero'
import Layout from '@/components/Layout'
import React from 'react'

const fmcg = () => {
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

export default fmcg

const sections = [
    {
        heading: "Startup Stage",
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
        tagline:"Break into the EV market with speed, style, and storytelling.",
        content: [
            "Target from niche to mass- Early adopters to mainstream commuters",
            "Build recall with USP-focused storytelling",
            "Create social proof with user-generated content.",
            "Lean CAC with agile media testing"
        ],
    },
    {
        heading: "Growth Stage",
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
        tagline:"Scale brand. Multiply demand. Own your category.",
        content: [
           "Elevate brand search with emotion + performance",
           "Create discovery across aggregators ,content portals and social influencer channels ",
           "Expand reach with hyper-local influencer tiers",
           "Precision mapping for showroom <> campaign catchment area.",
           "Capture mid-funnel with review and test-ride content",
           "Optimize CAC through smart audience layering",
           "Design offers around seasons and lifestyle hooks",
           "Power full-funnel visibility with YouTube + Meta"
        ],
    },
    {
        heading: "Maturity Stage",
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
        tagline:"Scale with precision.",
        content: [
         "High impact branding campaigns- Maximizing and optimizing for reach and frequency",
         "Creating  automobile and motorbike content IPs with leading content houses and creators",
         "Capturing high SOV during seasonal periods",
         "Dominate high-intent keywords in paid and organic",
         "Build loyalty with advanced CRM + remarketing journeys",
         "Differentiate with futuristic tech narratives",
         "Experiment across emerging platforms"

        ],
    },
];