import { gql } from "@apollo/client";

export const GET_CASE_STUDIES = gql`
  query CaseStudies {
    caseStudies {
      edges {
        node {
          content
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          slug
          title
          casestudyfield {
            casestudyfield
            fieldGroupName
            link
            para
            featuredimage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_CASE_STUDY_BY_SLUG = gql`
  query CaseStudyBySlug($slug: ID!) {
    caseStudy(id: $slug, idType: SLUG) {
      id
      content
      databaseId
      excerpt
      title
      slug
      casestudyfield {
        link
        para
      }
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
    }
  }
`;

export const GET_ALL_CASE_STUDY_SLUGS = gql`
  query CaseStudies {
    caseStudies {
      edges {
        node {
          slug
        }
      }
    }
  }
`;
