const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'app/javascript/src/main.js',
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'app/javascript/src')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/main.scss";
        `
      }
    }
  }
}
