/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: false,
    images: {
        unoptimized: true,
    },
    webpack: function (config, { dev }) {
        return config;
    },
};

module.exports = nextConfig;
