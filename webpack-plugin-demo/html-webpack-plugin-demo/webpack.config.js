var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: '[name].[hash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['common', 'vendor'],
      minChunks: 2
    }),
    // new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'test.html',
      template: 'src/assets/test.html'
    })
  ]
};