const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {

  entry: {
    index: path.join(__dirname, 'src/index.jsx'),
  },

  output: {
    path: path.join(__dirname, 'build/public'),
    filename: 'index.bundle.js',
    publicPath: '/public/',
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpeg|webp|woff|woff2|eot|ttf|ttc|svg)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    hot: true,
    open: true,
    historyApiFallback: {
      rewrites: [
        { from: /^\//, to: '/index.html' },
      ],
    },
  },

  resolve: {
    alias: {
      Globals: path.join(__dirname, 'src/globals'),
      Assets: path.join(__dirname, 'src/assets'),
      Commons: path.join(__dirname, 'src/commons'),
      Utils: path.join(__dirname, 'src/utils'),
      Home: path.join(__dirname, 'src/Home'),
      Category: path.join(__dirname, 'src/Category'),
    },
    extensions: ['.js', '.jsx'],
  },
};
