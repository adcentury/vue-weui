var path = require('path')
var webpack = require('webpack')

module.exports = {

  devtool: 'inline-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'main.js')
  ],

  output: {
    path: __dirname + '/__build__',
    publicPath: '/__build__/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.vue$/, loader: 'vue'},
      { test: /\.css$/, loader: 'style!css'},
      { test: /\.less$/, loader: 'style!css!autoprefixer!less' },
      { test: /\.(png|jpg|gif)$/, loader: 'file?name=[name].[ext]?[hash]' }
    ]
  },

  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  },

  resolve: {
    alias: {
      'vue-weui': path.join(__dirname, '..', 'components')
    }
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

}
