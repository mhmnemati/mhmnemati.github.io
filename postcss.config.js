const arwesFrames = require("@arwes/frames");

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-functions": {
            functions: {
                kranoxClip: arwesFrames.createFrameKranoxClip,
                octagonClip: arwesFrames.createFrameOctagonClip,
            },
        },
    },
};
