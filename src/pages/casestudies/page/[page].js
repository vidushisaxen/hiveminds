import Layout from '@/components/Layout';
import { fadeIn, fadeUp, headingAnim, paraAnim, routeChangeTop } from '@/components/gsapAnimations'
import img from "../../../../public/assets/images/services/hero.png";
import Hero from '@/components/Hero';
import { getAllCaseStudies, getPagesCount, getPaginatedCaseStudies } from '@/lib/casestudies';
import { getAllIndustries } from '@/lib/industries';
import CaseStudyListing from '@/components/CaseStudy/CaseStudyListing';
import Metadata from '@/components/Metadata';


const metadata={
    title:" Hiveminds Case Studies – Retail, Fintech, Consumer Brands",
    metaDescription:"Browse Hiveminds’ comprehensive case studies covering retail, fintech, consumer brands, healthcare and more—insights driven by data-first marketing.",
    path:"casestudies",
    img:"homepage.png",
    date_published: "2025-03-21T00:00",
    date_modified: "2025-03-21T00:00",
  }
export default function CaseStudyPage({ caseStudies, pagination, industries }) {

    headingAnim();
    paraAnim();
    fadeUp();
    fadeIn();
    routeChangeTop();

    return (
        <>
        <Metadata metadata={metadata} noindex={true}/>
            <Layout>
                <Hero title1={"Our Case"} title2={"Studies"} para={"Clients rely on our integrated network of agencies and specialized practices to deliver personalized experiences through creative, media and customer experience management."} img={img} />
                <div className='tablet:pt-[12%] mobile:pt-[15%]'>
                    <CaseStudyListing caseStudies={caseStudies} industries={industries} pagination={pagination} />
                </div>
            </Layout>
        </>
    );
}

export async function getStaticProps({ params = {} } = {}) {
    const { industries } = await getAllIndustries();
    const { caseStudies, pagination } = await getPaginatedCaseStudies({
        currentPage: params?.page,
    });

    if (!pagination.currentPage) {
        return {
            props: {},
            notFound: true,
        };
    }

    return {
        props: {
            caseStudies,
            industries,
            pagination: {
                ...pagination,
                basePath: '/casestudies',
            },
        },
        revalidate: 500,
    };
}

export async function getStaticPaths() {
    const { caseStudies } = await getAllCaseStudies();
    const pagesCount = await getPagesCount(caseStudies);

    const paths = [...new Array(pagesCount)].map((_, i) => {
        return { params: { page: String(i + 1) } };
    });

    return {
        paths,
        fallback: 'blocking',
    };
}
