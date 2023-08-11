/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "01.gritlab.ax",
        port: "",
        pathname: "/git/user/avatar/**",
      },
    ],
    domains: ["01.gritlab.ax"],
  },
};

module.exports = nextConfig;
