'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     'vue-style-loader',
        //     { loader: 'css-loader', options: { importLoaders: 1 } },
        //     'postcss-loader',
        //   ],
        // }),
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
