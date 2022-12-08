const path = require('path');

module.exports = {
    
    mode: 'development',
    entry: {
      app:'./starterOnly/src/app.js', 
    },
    output: {
      filename:'app.js',
      path: path.resolve(__dirname, 'starterOnly')
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
        directory: path.join(__dirname, 'starterOnly'),
        },
        compress: true,
        port: 9000,
    },
};