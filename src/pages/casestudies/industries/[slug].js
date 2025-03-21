import {
  fadeIn,
  fadeUp,
  headingAnim,
  paraAnim,
} from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { getAllIndustries, getIndustryBySlug } from "@/lib/industries";
import img from "../../../../public/assets/images/services/hero.png";
import IndustryCsListing from "@/components/CaseStudy/IndustryCSListing";
import { notFound } from "next/navigation";
import MoreCs from "@/components/CaseStudyDetail/MoreCs";

export default function Blogs({ industry, industries }) {
  headingAnim();
  paraAnim();
  fadeUp();
  fadeIn();

//   console.log(industries);


  return (
    <>
      <Layout>
        <Hero
          title1={"Our Case"}
          title2={"Studies"}
          para={
            "Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."
          }
          img={img}
        />
        <IndustryCsListing  industries={industries} industry={industry} />  
        <MoreCs/>             
      </Layout>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug: industrySlug } = params;
  const { industry } = await getIndustryBySlug(
    industrySlug
  );

  if (!industry) {
    return {
      notFound: true,
    };
  }

  const { industries } = await getAllIndustries();

  return {
    props: {
      industry,
      industries,
    },
    revalidate: 500,
  };
}

export async function getStaticPaths() {
  const { industries } = await getAllIndustries();

  const paths = industries.map((industry) => ({
    params: {
      slug: industry.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}
