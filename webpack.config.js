const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        filename: "[name].[contenthash].js", // todo: читаем про contenthash и кэширование.
        path: path.resolve(__dirname, "build"),
    },
};
