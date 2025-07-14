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
                <Hero title1={"Healthcare"} img={"/assets/images/industry/health-and-wellness.png"} />
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
                link: "/casestudies/sugar-fit",
                img: "/assets/images/impact/casestudy/sugar-fit-cs-hero.jpg",
                title: "Sugar Fit"
            }
        ],
        tagline:"Launch fast. Get visible. Drive leads",
        content: [
            "Hyper-targeted ads to drive early leads",
            "Awareness via trusted creators across languages",
            "Policy Compliant creatives",
            "Lean CAC with agile media testing",
            "Full-funnel setup to convert faster"
        ],
    },
    {
        heading: "Growth Stage",
        ref: "growthRef",
        id: "stage-growth",
        images: [
            {
                link: "/casestudies/dr-agarwal",
                img: "/assets/images/impact/casestudy/dragarwal-cs-hero.jpg",
                title: "Dr. Agarwal"
            }
        ],
        tagline:"Scale smart. Optimize ROI. Expand reach",
        content: [
            "Local SEO + GMB to dominate nearby searches",
            "Initiate branding into the media mix",
            "Cluster targeting to unlock new regions",
            "Scale patient bookings with full-funnel targeting across Google & Meta.",
            "Grow app installs and repeat usage with sharp targeting.",
            "Channel mix expansion with cohort insights"
        ],
    },
    {
        heading: "Maturity Stage",
        ref: "maturedRef",
        id: "stage-matured",
        images: [
            {
                link: "/casestudies/protinex",
                img: "/assets/images/impact/casestudy/protinex-cs-hero.jpg",
                title: "Protinex"
            }
        ],
        tagline:"",
        content: [
          "Content marketing including episodic content creation, articles, SEO and digital PR.",
	"Drive quality footfalls to your hospital/ clinic centers",
    "Regional creatives for deeper personalization",
	"Brand + performance campaigns, synced",
	"Retail marketing- Qcom and E-com management for Healthcare products",
	"From view till clinic full funnel visibility and campaign management"
        ],
    },
];