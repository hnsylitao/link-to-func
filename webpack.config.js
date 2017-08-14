var path = require('path')
  , webpack = require('webpack')
  , _ = require('lodash')
  , rootPath = path.join(__dirname, './')
  , package = require(path.join(rootPath, 'package.json'))
  , srcPath = path.join(rootPath, 'src')
  , buildPath = path.join(rootPath, 'build')
  , libraryName = (function (str) {
  return str.split("-").map(function (c, i) {
    return i > 0 ? (c.charAt(0).toUpperCase() + c.substring(1)) : c;
  }).join('');
})(package.name);

var createConfig = function (config) {
  var baseConfig = {
    output: {
      path: buildPath,
      filename: '[name].js',
      library: libraryName,
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: [srcPath],
          use: [{
            loader: 'babel-loader',
          }]
        },
      ],
    }
  };
  return _.assign({}, baseConfig, config);
}

module.exports = [
  createConfig({
    entry: {
      ['index']: path.resolve(srcPath, 'index.js')
    },
    plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  }),
  createConfig({
    entry: {
      ['index.min']: path.resolve(srcPath, 'index.js')
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
      }),
      new webpack.NoEmitOnErrorsPlugin(),
    ],
  })
]