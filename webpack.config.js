var path = require('path')
var root = path.resolve(__dirname, './')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var express = require('express')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    //publicPath: '/static/',
    filename: '[name].js'
    //filename: '[name]-[hash].js'
  },
  externals: {
    'zepto': 'Zepto'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias : {
      'vue': 'vue/dist/vue.js', 
      'src': path.resolve(__dirname, './src'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components'),
      'views': path.resolve(__dirname, './src/views')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: root,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url'
      }
    ]
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      favicon: 'favicon.ico',
      inject: true
    })
  ],
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    port:4000 //端口你可以自定义
  }
}
