import { gql } from "@apollo/client";

export const CASE_STUDY_FIELDS = gql`
  fragment CaseStudyFields on CaseStudy {
    id
    excerpt
    title
    date
    databaseId
    modified
    slug
    featuredImage {
      node {
        altText
        sourceUrl
        sizes
        srcSet
      }
    }
    industries {
      edges {
        node {
          databaseId
          name
          slug
          id
        }
      }
    }
    isSticky {
      isSticky
    }
  }
`;

export const QUERY_ALL_CASE_STUDIES = gql`
  ${CASE_STUDY_FIELDS}
  query AllCaseStudies {
    caseStudies(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...CaseStudyFields
        }
      }
    }
  }
`;
