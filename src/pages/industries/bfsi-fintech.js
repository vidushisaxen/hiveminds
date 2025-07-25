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
                <Hero title1={"BFSI"} img={"/assets/images/industry/bfsi-and-fintech-detail.png"} />
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
                link: "/casestudies/max-life",
                img: "/assets/images/impact/casestudy/max-life-cs-hero.jpg",
                title: "Max Life"
            },
        ],
        tagline:"Launch strong, build trust, and acquire your first million users.",
        content: [
            "Full-Funnel Digital & Advertising Strategy",
            "Hyper-Targeted Lead Generation",
            "Quality Parameters Setup for an Ideal Lead",
            "Social Proof & ORM Setup",
            "Marketing Stack Selection",
            "Tools & Tags Setup",
            "Professional Dashboards for Business Monitoring",
            "Consumer Journey on App & Web Optimizations",
            "Capture organic traffic early with high-impact SEO built for BFSI queries"
        ],
    },
    {
        heading: "Growth Stage",
        ref: "growthRef",
        id: "stage-growth",
        images: [
            {
                link: "/casestudies/instapay",
                img: "/assets/images/impact/casestudy/digit-cs-hero.jpg",
                title: "Digit"
            },
        ],
        tagline:"Scale faster, spend smarter, and grow your user base with precision.",
        content: [
            "Full-Funnel Digital & Advertising Strategy (Google, Meta, Bing, Affiliates)",
            "Cross-Channel Attribution Dashboards",
            "SEO Expansion to Tier 2/3 Cities",
            "Lead Scoring",
            "Call Centre Allocation Planning",
            "Partnerships (Amazon, FK, Cred, Jio, 40+ partners)  & Influencers",
            "CRM Integrations for Nurturing",
            "Partnership & Influencer Business",
            "Professional Dashboards for Business Monitoring",
            "Consumer Journey on App & Web Optimizations"
        ],
    },
    {
        heading: "Maturity Stage",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "/casestudies/digit",
                img: "/assets/images/impact/casestudy/instapay-cs-hero.jpg",
                title: "Instapay"
            },
        ],
        tagline:"Maximize ROI, boost retention, and dominate your category.",
        content: [
          "Omnichannel Campaign Planning (TV + Digital)",
	"Advanced Marketing Mix Modelling (MMM)",
	"Cross-Channel Attribution Dashboards",
	"Lead Scoring",
	"Call Centre Allocation Planning",
	"Partnerships (Amazon, FK, Cred, Jio, 40+ partners)  & Influencers",
	"CRM Integrations for Nurturing",
	"Consumer Journey on App & Web Optimizations",
	"Hyperlocal  Branch Promotions",
	"Voice of Customer (VoC) ORM Automation",
	"Call Centre Automation via GenAI"
        ],
    },
];