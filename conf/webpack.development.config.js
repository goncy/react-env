var webpack = require('webpack');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
  devtool: 'eval',
  debug: true,
  entry: {
    test: './conf/webpack.tests.js'
  },
  devServer: {
    contentBase: './public',
    port: 3333
  },
  module: {
    loaders: [
      {
        loader: "mocha!babel",
        test: /\.test\.js$/
      }
    ]
  }
});
