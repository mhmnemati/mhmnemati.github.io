const path = require("path");

module.exports = {
    localePath: path.resolve("./src/locales"),
    i18n: {
        locales: ["en", "fa"],
        defaultLocale: "fa",
    },
};
