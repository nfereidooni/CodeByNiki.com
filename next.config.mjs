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
};

export default nextConfig;
