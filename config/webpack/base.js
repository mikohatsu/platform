const { webpackConfig, merge } = require('@rails/webpacker')
const customConfig = {
  resolve: {
    extensions: ['.js', '.vue', '.scss']
  }
}

module.exports = merge(webpackConfig, customConfig) 