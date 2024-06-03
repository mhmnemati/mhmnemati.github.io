/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: false,
    pageExtensions: ["tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    images: {
        unoptimized: true,
    },
    webpack: function (config, { dev }) {
        if (dev) {
            config.watchOptions = {
                poll: true,
            };
        }

        return config;
    },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
