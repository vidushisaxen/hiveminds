import { GET_CASE_STUDIES } from "@/data/casestudies";
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