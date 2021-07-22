
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 750, // 根据视觉稿的宽度进行设置
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['el'], // 忽略转换的css选择器
            minPixelValue: 1,
            mediaQuery: false
          })
        ]
      }
    }
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? 'false' : 'eval-source-map'
  },
  devServer: {
    open: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    overlay: {
      warnings: false,
      errors: true
    }
    // before: require('./mock/mock-server.js'),
    // proxy: {
    //   // 此处可配置代理转发
    //   '/api': {
    //     target: 'http://192.168.31.195:8686',
    //     changeOrigin: true,
    //     pathRewrite: { '^/api': '' }
    //   }
    // }
  }
}
