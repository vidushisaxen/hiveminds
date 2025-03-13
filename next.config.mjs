/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1416390-5311076.cloudwaysapps.com',
      }
    ]
  },
  env: {
    PORTFOLIO_PER_PAGE: "9",
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_MENU_LOCATION_NAVIGATION: process.env.WORDPRESS_MENU_LOCATION_NAVIGATION || 'PRIMARY',
  },
};

export default nextConfig;
