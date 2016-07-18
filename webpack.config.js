var webpack = require('webpack');
var path    = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/app/app.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "[name].bundle.js"
    },

    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            },
            {
                test: /\.html$/,
                loader: 'raw'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!postcss')
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './src',
        stats: 'minimal',
        historyApiFallback: true
    }
};