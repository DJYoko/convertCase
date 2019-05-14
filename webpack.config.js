module.exports = {
    mode: "development",
    entry: "./src/convertCase.ts",
    output: {
        path: __dirname + "/docs/",
        filename: 'convertCase.js'
    },

    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader"
        }]
    },
    resolve: {
        extensions: [".ts"]
    },
};