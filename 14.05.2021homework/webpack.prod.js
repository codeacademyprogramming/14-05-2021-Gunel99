const path = require("path");
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash].css'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [ 
          MiniCssExtractPlugin.loader, 
          "css-loader", 
          "sass-loader" ],
      },
    ],
  },
});
