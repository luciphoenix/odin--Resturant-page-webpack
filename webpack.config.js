const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename:"main.js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles:['./src/index.html']
    },
    plugins: [
        new HtmlPlugin({
            template: "./src/index.html"
        })
    ],
    module:{
        rules:[{
            test: /\.css$/i,
            use:["style-loader", "css-loader"]
        },
    {
        test: /\.(png|jpeg|jpg)/i,
        type:"asset/resource"
    }],
    }
}