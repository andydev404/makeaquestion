const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname,'public/js'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devServer: {
    contentBase: path.join(__dirname,'public'),
    compress: true
  }
}
