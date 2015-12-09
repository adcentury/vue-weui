var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'main.js'),

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: './',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],

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
  }
};
