var path = require('path');

module.exports = {
  entry: './app/App.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/,
        loader: 'babel'
      }
    ]
  }
}
