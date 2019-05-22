module.exports = {
  baseUrl: '/',
  outputDir: 'dist',
  filenameHashing: false,
  chainWebpack: config => {
    // config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        // target: 'http://103.27.4.146:3001',
        target: 'http://127.0.0.1:3002',
        changeOrigin: true
      }
    }
  }
}
