/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Hero from '@/components/Homepage/Hero'
import Contact from '@/components/Homepage/Contact'
import Awards from '@/components/Homepage/Awards'
import Blogs from '@/components/Homepage/Blogs'
import Story from '@/components/Homepage/Story'
import TeamMembers from '@/components/Homepage/TeamMembers'
import { fadeIn, fadeUp, headingAnim, paraAnim } from '@/components/gsapAnimations'
import React, { useEffect, useState } from 'react'
import { Clients2 } from '@/components/Homepage/Clients2'
import Services from '@/components/Homepage/Solutions'
import MobileHero from '@/components/Homepage/MobileHero'
import Metadata from '@/components/Metadata'
import { getHomePageCaseStudies } from '@/lib/casestudies'
import { getAllIndustries } from '@/lib/industries'
import CaseStudies from '@/components/Homepage/CaseStudies'

const metadata = {
  title: "HiveMinds | Data-Driven Digital Marketing for Business Growth",
  metaDescription: "HiveMinds delivers strategic, data-driven digital marketing solutions to help startups and brands grow sustainably with advanced technology and expertise.",
  path: ""
}
const index = ({ stickyCaseStudies, industries }) => {

  const [mobileWidth, setMobileWidth] = useState(false);
  useEffect(() => {
    if (globalThis.innerWidth > 1024) {
      setMobileWidth(false);
    } else {
      setMobileWidth(true);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  paraAnim();
  headingAnim()
  fadeUp();
  fadeIn();
  return (
    <>
      <Metadata metadata={metadata} />
      <Layout isOpen={isOpen}>
        {!mobileWidth ? <Hero /> : <MobileHero />}
        <Story isOpen={isOpen} setIsOpen={setIsOpen} />
        <Services />
        <Clients2 />
        <TeamMembers />
        <div className='relative h-fit w-screen rounded-[20px]  '>
          <span className=' block absolute h-[20%] w-full'></span>
          <CaseStudies caseStudies={stickyCaseStudies} />
          <Awards />
          <span className='absolute h-[20%] bottom-[-10%]  w-full'></span>
          <Blogs />
        </div>
        <Contact title1={"Looking to Drive "} title2={"Growth?"} para={"We're passionate about delivering results and addressing the challenges that matter most to your business. To learn more, get in touch with us."} />
      </Layout>
    </>
  )
}

export default index;

export async function getStaticProps() {
  const { caseStudies } = await getHomePageCaseStudies();
  const { industries } = await getAllIndustries();

  const stickyCaseStudies = caseStudies.filter((caseStudy) => caseStudy.caseStudyFields.ishomepagepost) || null;
  return {
    props: {
      stickyCaseStudies,
      industries,
    },
    revalidate: 500,
  };
}