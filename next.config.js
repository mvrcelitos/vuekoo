/** @type {import('next').NextConfig} */
const nextConfig = {
   swcMinify: true,
   experimental: {
      typedRoutes: true,
   },
   pageExtensions: ["ts", "tsx"],
};

module.exports = nextConfig;
