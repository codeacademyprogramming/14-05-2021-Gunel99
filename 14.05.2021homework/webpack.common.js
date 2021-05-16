const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
    vendors: "./src/vendors.js",
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.html'
  })],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [ 
          "style-loader", 
          "css-loader", 
          "sass-loader" 
        ],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][hash][ext]'
        }
      },
    ],
  },
};
