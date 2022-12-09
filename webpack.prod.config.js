const path = require('path')

module.exports = {

  mode: 'production',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, 'starterOnly')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
