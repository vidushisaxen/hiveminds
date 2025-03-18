import { getApolloClient } from './apollo-client';
import { sortObjectsByDate } from './datetime';

import { QUERY_ALL_CASE_STUDIES } from "../data/casestudies";

/**
 * caseStudyPathBySlug
 */

export function caseStudyPathBySlug(slug) {
  return `casestudies/${slug}`;
}

/**
 * getAllCaseStudies
 */
export async function getAllCaseStudies() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_CASE_STUDIES,
  });

  const caseStudies = data?.data.caseStudies.edges.map(({ node = {} }) => node);

  return {
    caseStudies: Array.isArray(caseStudies) && caseStudies.map(mapCaseStudyData),
  };
}

/**
 * mapCaseStudyData
 */

export function mapCaseStudyData(caseStudy = {}) {
  const data = { ...caseStudy };
  if (data.categories) {
    data.categories = data.categories.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.industries) {
    data.industries = data.industries.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.services) {
    data.services = data.services.edges.map(({ node }) => {
      return {
        ...node,
      };
    });
  }
  if (data.featuredImage) {
    data.featuredImage = data.featuredImage.node;
  }
  return data;
}

/**
 * sortStickyCaseStudies
 */

export function sortStickyCaseStudies(caseStudies) {
  return [...caseStudies].sort((caseStudy) => (caseStudy.isSticky.isSticky ? -1 : 1));
}