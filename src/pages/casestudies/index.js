import { fadeIn, fadeUp, headingBlur, paraAnim } from "@/components/gsapAnimations";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import { getPaginatedCaseStudies } from "@/lib/casestudies";
import { getIndustries } from "@/lib/industries";
import img from "../../../public/assets/images/services/hero.png";
import CaseStudyListing from "@/components/CaseStudy/CaseStudyListing";

export default function Blogs({ caseStudies, pagination, industries }) {
    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();

    return (
        <>
            <Layout>
                <Hero title1={"Our Case"} title2={"Studies"} para={"Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."} img={img} />
                <CaseStudyListing caseStudies={caseStudies} industries={industries} pagination={pagination} />               
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { caseStudies, pagination } = await getPaginatedCaseStudies();
    if (slug) {
        const { caseStudies: filteredCaseStudies, pagination: filteredPagination } = await getPaginatedCaseStudies({
            industryId: slug,
        });
        caseStudies = filteredCaseStudies;
        pagination = {
            ...filteredPagination,
            basePath: `/casestudies/${slug}/page`,
        };
    }

    let { industries } = await getIndustries();

    return {
        props: {
            caseStudies,
            industries,
            pagination: {
                ...pagination,
                basePath: slug ? `/casestudies/${slug}/page` : '/casestudies',
            },
        },
        revalidate: 500,
    };
}