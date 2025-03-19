
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
// import { sortStickyCaseStudies } from "@/lib/casestudies"
import img from '../../../public/assets/images/blogpage/blog-listing-hero.png'
// import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'
// import CaseStudyListing from "@/components/CaseStudy/CaseStudyListing"
// import { getPaginatedCaseStudies } from "@/lib/casestudies"
// import { getIndustries } from "@/lib/industries"
// import { useEffect, useState } from "react"

export default function Blogs({ initialCaseStudies, initialPagination, industries }) {
//     const [caseStudies, setCaseStudies] = useState(initialCaseStudies);
//     const [pagination, setPagination] = useState(initialPagination);
//     const [isLoading, setIsLoading] = useState(false);
//     const [nextPageData, setNextPageData] = useState(null);

//     headingBlur();
//     paraAnim();
//     fadeUp();
//     fadeIn();
//     // console.log(initialCaseStudies);
//     // console.log(initialPagination);
//     // console.log(industries);

//     useEffect(() => {
//         const prefetchNextPage = async () => {
//             if (pagination.currentPage < pagination.pagesCount) {
//                 const nextPage = pagination.currentPage + 1;
//                 const res = await fetch(`/api/getCaseStudies?page=${nextPage}`);
//                 const { caseStudies: newCaseStudies, pagination: newPagination } = await res.json();
//                 setNextPageData({ newCaseStudies, newPagination });
//             }
//         };
//         prefetchNextPage();
//     }, [pagination]);

//     const loadMoreCaseStudies = () => {
//         setIsLoading(true);
//         if (nextPageData && !isLoading) {
//             setCaseStudies((prevCaseStudies) => [...prevCaseStudies, ...nextPageData.newCaseStudies]);
//             setPagination(nextPageData.newPagination);
//             setNextPageData(null);
//             setIsLoading(false);
//         }
//     };

    return (
        <>
            <Layout>
                <Hero title1={"What's"} title2={"Buzzing"} para={"Leveraging data-driven insights and technical expertise, HiveMinds crafts SEO solutions that elevate digital visibility and drive measurable results, turning organic searches into valuable customer relationships."} img={img} />
                {/* {featuredCaseStudy && (
                    <FeaturedBlog caseStudy={featuredCaseStudy} />
                )}     */}
                {/* <CaseStudyListing  /> */}
            </Layout>
        </>
    )
}

// export async function getStaticProps({ params }) {
//     const { slug } = params || {};
//     let { caseStudies, pagination } = await getPaginatedCaseStudies();
//     const { industries } = await getIndustries();
//     if (slug) {
//         const { caseStudies: filteredCaseStudies, pagination: filteredPagination } = await getPaginatedCaseStudies();
//         caseStudies = filteredCaseStudies;
//         console.log(caseStudies)
//         pagination = {
//             ...filteredPagination,
//             basePath: `/industries/${slug}/page`,
//         };
//     }
//     // caseStudies = sortStickyCaseStudies(caseStudies);
//     return {
//         props: {
//             initialCaseStudies: caseStudies,
//             industries,
//             initialPagination: {
//                 ...pagination,
//                 basePath: slug ? `/industries/${slug}/page` : '/blog',
//             },
//         },
//         revalidate: 500,
//     };
// }