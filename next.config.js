/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["tsx", "mdx"],
    reactStrictMode: false,
    experimental: {
        mdxRs: true,
    },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
