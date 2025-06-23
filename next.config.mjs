/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://vercel.live;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com data:;
    img-src 'self' data: https:;
    connect-src 'self' https://www.google-analytics.com https://vercel.live;
    frame-src 'self' https://snazzymaps.com;
  `.replace(/\s{2,}/g, ' ').trim()
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  }
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1435946-5364580.cloudwaysapps.com',
      }
    ]
  },
  env: {
    CASESTUDY_PER_PAGE: process.env.CASESTUDY_PER_PAGE,
    NEXT_FRONTEND_URL: process.env.NEXT_FRONTEND_URL,
    POSTS_PRERENDER_COUNT: "10",
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
  },

  // 👇 Add this async headers() function
  async headers() {
    return [
      {
        source: "/(.*)", // Applies to ALL routes
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
