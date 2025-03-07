/* eslint-disable react-hooks/rules-of-hooks */
import Expanding from '@/components/CaseStudyDetail/Expanding';
import Hero from '@/components/CaseStudyDetail/Hero';
import MoreCs from '@/components/CaseStudyDetail/MoreCs';
import Layout from '@/components/Layout';
import { fadeIn, fadeUp, headingBlur, paraAnim, lineAnim } from '@/components/gsapAnimations';
import { getAllCaseStudiesSlug, getCaseStudyBySlug } from '@/lib/casestudies';
import React, { useState } from 'react';

const CaseStudyDetail = ( ) => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ GSAP Animations
  headingBlur();
  paraAnim();
  fadeUp();
  fadeIn();
  lineAnim();

//   if (!caseStudy) {
//     return <div className="text-center py-10">Case study not found.</div>;
//   }

  return (
    <Layout isOpen={isOpen}>
      {/* ✅ Pass case study data to components */}
      {/* <Hero 
        title1={caseStudy.title} 
        title2={caseStudy.slug} 
        img={caseStudy.featuredImage?.node?.sourceUrl || "/default.jpg"} 
      />
      <Expanding content={caseStudy.casestudyfield} /> */}
      <MoreCs />
    </Layout>
  );
};

export default CaseStudyDetail;

/** ✅ Define getStaticPaths to fetch all slugs */
export async function getStaticPaths() {
  const slugs = await getAllCaseStudiesSlug(); // Fetch all case study slugs
  console.log(slugs)
  if (!slugs.length) {
    console.error("No case study slugs found.");
  }

  return {
    paths: slugs.map((slug) => ({
      params: { slug }, // Correct structure for Next.js dynamic routes
    })),
    fallback: false, // Change to 'true' for ISR (Incremental Static Regeneration)
  };
}

/** ✅ Fetch case study data based on slug */
export async function getStaticProps({ params }) {
  console.log("Fetching case study for slug:", params.slug);

  const { caseStudy } = await getCaseStudyBySlug(params.slug);

//   if (!caseStudy) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       caseStudy,
//     },
//     revalidate: 500, // ISR for updates
//   };
}
