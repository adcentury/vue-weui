var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname));

app.listen(8080, function () {
  console.log('Server listening on http://localhost:8080, Ctrl+C to stop')
});
