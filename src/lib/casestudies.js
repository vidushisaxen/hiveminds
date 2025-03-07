import { GET_ALL_CASE_STUDY_SLUGS, GET_CASE_STUDIES, GET_CASE_STUDY_BY_SLUG } from "@/data/casestudies";
import { getApolloClient } from "./apollo-client";

export async function getCaseStudies() {

    const apolloClient = getApolloClient();

    const data = await apolloClient.query({
        query: GET_CASE_STUDIES,
    });

    const caseStudies = data?.data.caseStudies.edges.map(({ node = {} }) => node);

    return {
        caseStudies,
    };
}

export async function getCaseStudyBySlug() {

    const apolloClient = getApolloClient();


    let caseData;
    try {
        caseData = await apolloClient.query({
          query: GET_CASE_STUDY_BY_SLUG,
          // variables: {
          //   slug,
          // },
        });
      } catch (e) {
        console.log(`[posts][getPostBySlug] Failed to query post data: ${e.message}`);
        throw e;
      }
      // if (!postData?.data.post) return { post: undefined };

    const caseStudy = caseData.slug.map(({ node = {} }) => node);

    return {
        caseStudy,
    };
}

export async function getAllCaseStudiesSlug() {
    try {
      const { data } = await client.query({
        query: GET_ALL_CASE_STUDY_SLUGS,
      });
  
      return data.caseStudies.edges.map((edge) => edge.node.slug);
    } catch (error) {
      console.error("Error fetching case study slugs:", error);
      return [];
    }
  }