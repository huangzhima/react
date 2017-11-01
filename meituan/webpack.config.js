var Webpack = require("webpack")
var htmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")
var  data=require("./data/index.js")
var  footnav=require("./data/footnav.js")
var url=require("url")
var queryString=require("querystring")
var CopyWebpackPlugin = require('copy-webpack-plugin')
const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    
    module: {
        rules: [{
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: svgSpriteDirs,
            },{
                test: /\.jsx|.js$/,
                use: ["babel-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ["html-loader"],

            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "less-loader"
                }]
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
        contentBase: path.join(__dirname, "/static"),
        watchContentBase: true,
        setup: function(app) {
            app.get('/index', function(req, res) {
                res.header("Access-Control-Allow-Origin","*")
                res.json(data);
            });
            app.get('/footnav', function(req, res) {
                res.header("Access-Control-Allow-Origin","*")
                res.json(footnav);
            });
            app.get('/getCode', function(req, res) {      
                res.json({code:123456,state:"0"});
            });
            app.get('/yzCode', function(req, res) { 
                const querys=queryString.parse(url.parse(req.url).query)
                console.log(querys)
                if(querys.code=="123456"){
                     res.json({state:"ok"});
                }else{
                     res.json({state:"error"});
                }
               
            });
             app.get('/sendPS', function(req, res) { 
                const querys=queryString.parse(url.parse(req.url).query)
                console.log(querys)
                if(querys.password=="12345678"){
                     res.json({state:"ok"});
                }else{
                     res.json({state:"error"});
                }
               
            });
        }
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

        }),
        // 拷贝静态文件夹
        new CopyWebpackPlugin([
        {   
            from: __dirname+'/static/static',
            to: __dirname + "/dist" ,
            ignore: ['.*']
        }
        ])

    ]


}