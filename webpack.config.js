var LiveReloadPlugin = require('webpack-livereload-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.scss', '.ts', '.js']
  },

  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    })
  ],

  entry: './app/main.ts',
  output: {
    path: "./app/dist",
    publicPath: 'dist/',
    filename: "bundle.js"
  },

  devtool: 'source-map',

  node: {
    fs: 'empty'
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },

  devServer: {
    historyApiFallback: true
  }
};
