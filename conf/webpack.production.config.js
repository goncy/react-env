var webpack = require('webpack');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend('./conf/webpack.base.config.js').merge({
  entry: {
    bundle: './src/index.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});
