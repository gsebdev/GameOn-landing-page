const path = require('path')

module.exports = {

  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    },
    compress: true,
    port: 9000
  }
}
