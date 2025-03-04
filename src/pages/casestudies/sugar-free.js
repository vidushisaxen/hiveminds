/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import Layout from '@/components/Layout'
import { fadeIn, fadeUp, headingBlur, paraAnim ,lineAnim} from '@/components/gsapAnimations'
import React, { useState } from 'react'


const content = {
    subtitle1: "Sugarfree Node ",
    subtitle2: "Surge",
    intro: "<p class='text-[1.5vw] mt-[2vw]'>Targeted node strategy drives 35% conversion boost.<br/><br/>Sugarfree boosts organic relevence by achieving a 35% increase in conversion rates.  </p>",
    features:[
        "<p class='text-[1.5vw] py-[1vw]'> <span class='text-primary'>35%  </span>Increase in Conversion Rates</p>",
      
    ],
    industry: "FMCG & Beauty",
    service: "Marketplace",
    category: "Node Expansion",
    problem: " <p class='text-[1.5vw] mt-[2vw]'>Sugar-free products suffered from limited organic relevance on parent nodes, hindering brand visibility and customer discovery in a highly competitive digital marketplace.</p>",
    approach: "<p class='text-[1.5vw] mt-[2vw]'>We restructured Sugar Free’s product listings by shifting Hero SKUs from general parent nodes to targeted affinity nodes, thereby enhancing organic relevance.   <br/><br/> Additionally, we implemented interactive Product Category Ads aimed at staple buyers, focusing on sugar and jaggery consumer segments.<br/><br/>This strategic shift involved integrating carefully selected, high-impact keywords to optimize communication and attract a more engaged audience, ultimately improving overall conversion metrics.</p>",
    impact: "<p class='text-[1.5vw] mt-[2vw]'>Our targeted strategy resulted in a <span class='text-primary'>15%  </span> increase in CTR, a <span class='text-primary'>35%  </span> boost in conversion rates, and a <span class='text-primary'>42%  </span> rise in product page clicks, driving overall sales growth</p>"

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
                <Hero title1={"Sugarfree"} title2={""} img={"/assets/images/impact/casestudy/sugarfree-cs-hero.jpg"} />
                <Expanding content={content} />
            </Layout>
        </>
    )
}

export default index;

