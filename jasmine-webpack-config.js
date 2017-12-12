const path = require('path');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const JasmineWebpackPlugin = require('jasmine-webpack-plugin');

const JS_PATH = path.join(__dirname, 'src');

module.exports = {
  entry: path.join(__dirname, 'src/spec.js'),
  resolve: { modules: [JS_PATH, path.join(__dirname, 'node_modules')] },
  module: {
    loaders: [
      {
        test: /.*\.js$/,
        include: JS_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new JasmineWebpackPlugin(),
    new WebpackBrowserPlugin({
      url: 'http://localhost',
      port: 8080,
      publicPath: '_specRunner.html',
    }),
  ],
};
