import { gql } from "@apollo/client";

export const GET_CASE_STUDIES = gql`
  query CaseStudies {
  caseStudies(first: 10) {
    edges {
      node {
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        slug
        title
        caseStudyFields {
          approach
          impact
          intro
          problemStatement
          subtitle
          title
        }
      }
    }
  }
}
`;
