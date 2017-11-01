var Webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [{
                test: /\.jsx|.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader?modules"],
            },
            {
                test: /\.jpg|.png$/,
                use: ["url-loader"]

            },
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        host: "localhost",
        port: "9999",
        hot: true,
        contentBase: path.join(__dirname, "src/static"),
        watchContentBase: true
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        }),
        new htmlWebpackPlugin({
            template: "./index.html",

        })

    ]


}