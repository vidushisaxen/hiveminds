import { getApolloClient } from './apollo-client';

import { QUERY_ALL_INDUSTRIES, QUERY_INDUSTRY_BY_SLUG, QUERY_INDUSTRY_SEO_BY_SLUG } from '../data/industries';

/**
 * industryPathBySlug
 */

export function industryPathBySlug(slug) {
  return `casestudies/industry/${slug}`;
}

/**
 * getAllIndustries
 */

export async function getAllIndustries() {
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: QUERY_ALL_INDUSTRIES,
  });

  const industries = data?.data.industries.edges.map(({ node = {} }) => node);

  return {
    industries: Array.isArray(industries) && industries.map(mapIndustryData),
  };
}

/**
 * getIndustryBySlug
 */

export async function getIndustryBySlug(slug) {
  const apolloClient = getApolloClient();
  const apiHost = new URL(process.env.WORDPRESS_GRAPHQL_ENDPOINT).host;

  let industryData;
  let seoData;

  try {
    industryData = await apolloClient.query({
      query: QUERY_INDUSTRY_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (e) {
    console.log(`[industries][getIndustryBySlug] Failed to query industry data: ${e.message}`);
    throw e;
  }

  if (!industryData?.data.industry) return { industry: undefined };

  const industry = mapIndustryData(industryData?.data.industry);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await apolloClient.query({
        query: QUERY_INDUSTRY_SEO_BY_SLUG,
        variables: {
          slug,
        },
      });
    } catch (e) {
      console.log(`[industries][getIndustryBySlug] Failed to query SEO plugin: ${e.message}`);
      console.log('Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.');
      throw e;
    }

    const { seo = {} } = seoData?.data?.industry || {};

    industry.title = seo.title;
    industry.description = seo.metaDesc;

    industry.og = {
      image: seo.opengraphImage,
    };
  }

  return {
    industry,
  };
}

/**
 * getIndustries
 */

export async function getIndustries({ count } = {}) {
  const { industries } = await getAllIndustries();
  return {
    industries: industries.slice(0, count),
  };
}

/**
 * mapIndustryData
 */

export function mapIndustryData(industry = {}) {
  const data = { ...industry };
  return data;
}
