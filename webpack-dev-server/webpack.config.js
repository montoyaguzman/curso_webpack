const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      // Loaders
      { test: /\.css/, use: ['style-loader', 'css-loader'] }
    ]
  }
}
