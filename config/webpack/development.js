process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { merge } = require('webpack-merge')
const webpackConfig = require('./base')

module.exports = merge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  
  // node 설정 수정
  node: {
    __dirname: true,
    __filename: true,
    global: true
  }
})
