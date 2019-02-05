const path = require('path');
const extractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home: path.resolve(__dirname, './src/index.js'),
    precios: path.resolve(__dirname, './src/precios/precios.js'),
    contacto: path.resolve(__dirname, './src/contacto/contacto.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "components/[name].js"
  },
  module: {
    rules: [
      // Loaders
      { 
        test: /\.css/,
        use: extractTextPlugin.extract({
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    // Plugins
    new extractTextPlugin("css/[name].css")
  ]
}
