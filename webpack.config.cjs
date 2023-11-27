const path = require("path");

module.exports = {
    //mode: 'production',
    mode: "development",
    //entry: "./js/main.js",
    entry: "./src/main.ts",

    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist"),
    },

    // ts-loader
    resolve: {
        extensions: [".ts", ".js"],
    },
    module: {
        rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    },


    // webpack-dev-server
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9000,
    },
};
