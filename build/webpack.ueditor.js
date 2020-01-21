/*
 * @Description: ueditor js 合并
 * @Version: 
 * @Author: WangYue
 * @Date: 2019-10-21 10:12:21
 * @LastEditors: 
 * @LastEditTime: 2019-12-18 10:57:32
 */
'use strict'
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: ['./static/sdeEditor/ueditor/_src/editor.js','./static/sdeEditor/ueditor/_src/editor.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'a')  
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
