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
    webpack: function (config) {
        config.module.rules.push({
            test: /\.ya?ml$/,
            use: "yaml-loader",
        });
        return config;
    },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
