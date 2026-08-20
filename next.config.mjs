/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 85],
  },
  async redirects() {
    // Old standalone section routes now live inside the v2 archive
    return [
      { source: "/about", destination: "/v2/about", permanent: false },
      { source: "/experience", destination: "/v2/experience", permanent: false },
      { source: "/projects", destination: "/v2/projects", permanent: false },
    ];
  },
  async rewrites() {
    const ingestionHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    const assetsHost = process.env.POSTHOG_ASSETS_HOST;
    if (!ingestionHost || !assetsHost) return [];
    return [
      {
        source: '/ingest/static/:path*',
        destination: `${assetsHost}/static/:path*`,
      },
      {
        source: '/ingest/array/:path*',
        destination: `${assetsHost}/array/:path*`,
      },
      {
        source: '/ingest/:path*',
        destination: `${ingestionHost}/:path*`,
      },
    ];
  },
  // Required to support PostHog trailing-slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
