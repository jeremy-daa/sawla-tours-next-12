/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Fix A: Redirect strategy for 404s
      // Export list of 404s from GSC and map them here.
      // Example:
      // {
      //   source: '/old-broken-url',
      //   destination: '/correct-new-url',
      //   permanent: true, // 301 redirect
      // },
    ];
  },
};

module.exports = nextConfig
