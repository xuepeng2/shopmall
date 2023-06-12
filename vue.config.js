const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  // publicPath: '/api',
  devServer: {
    // open: true,
    // host:'127.0.0.1',//用来启动Network
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://shopmall.com:8081',
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
})
