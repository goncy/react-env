var path = require("path");
var webpack = require('webpack');
var WebpackConfig = require('webpack-config');


module.exports = new WebpackConfig().merge({
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: "./public",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.scss$/,
        loader: "style!css!sass"
      },
      {
        test: /\.png$/,
        loader: "file?prefix=img&limit=10000/"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".scss", ".css"]
  }
});
