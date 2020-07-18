const webpack = require('webpack')
const backUrl = 'http://39.98.137.86:18080'
const tcURL = 'http://39.98.137.86:18080'
const noURL = 'http://localhost:3000'
console.log('环境名:' + process.env.NODE_ENV, '请求基准地址：' + process.env.VUE_APP_URL)

// 导入compression-webpack-plugin
// 使用gzip超级压缩
const CompressionPlugin = require("compression-webpack-plugin")
// 利用webpack-bundle-analyzer 分析器，分析项目依赖关系
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = { // 部署应用包时的基本 URL

  // publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  publicPath: './',
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  // assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查 安装@vue/cli-plugin-eslint有效
  lintOnSave: true,
  // 是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
  runtimeCompiler: true,
  // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') { // 为生产环境修改配置...
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          }),
          new BundleAnalyzerPlugin()
        ]
      }
    } else { // 为开发环境修改配置...
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240, //对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }
  },
  // css相关配置
  css: { // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true, // 开启 CSS source maps?
    sourceMap: false, // css预设器配置项
    loaderOptions: {}, // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // webpack-dev-server 相关配置
  devServer: { // 设置代理
    hot: true, // 热加载
    host: '0.0.0.0', // ip地址
    port: 8082, // 端口
    https: false, // false关闭https，true为开启
    open: true, // 自动打开浏览器
    overlay: {
      warnings: false,
      errors: false
    },
    proxy: {
      '/index': {
        target: noURL
      },
      '/byd': {
        target: backUrl
      },
      '/tc': {
        target: tcURL,
        pathRewrite: {
          '^/tc': '/byd'
        }
      },
      '/base': {
        target: tcURL
      }
    }
  },
  lintOnSave: false

}
