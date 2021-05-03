const path = require('path')
const HtmlWebpackplugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/my-card.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ["sass-to-string", "sass-loader"]
        }]
    },
    plugins: [
        new HtmlWebpackplugin({
            template: "./index.html"
        })
    ],
    resolve : {
        extensions : ['.js', ".scss"]
    }
}