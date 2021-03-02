const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
    },

    output: {
        path: __dirname + '/public',
        filename: 'index.bundle.js',
        publicPath: '/',
    },

    module: {
        rules: [
        {
            test: /\.html$/,
            loader: 'html-loader'
        },
	    {
            test: /\.js$/,
            loader: 'babel-loader'
        },
        {
            test : /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test : /\.(gif|png|jpeg|webp|woff|woff2|eot|ttf|ttc|svg)$/,
            use: 'file-loader',
        }]
    },

    plugins: [
        //new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        open: true,
        historyApiFallback : {
            rewrites: [
                { from: /^\//, to: '/index.html' },
            ]
        }
    },

    resolve: {
        alias: {
            Globals: path.resolve(__dirname, 'src/shared/assets/globals'),
            Endpoint: path.resolve(__dirname, 'src/shared/assets/endpoint'),
        }
    },
}