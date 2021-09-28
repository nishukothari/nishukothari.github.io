const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './react-views/Index.jsx'
  },
  mode: 'development',
  output: {
    path: path.join(__dirname, '/public/scripts/'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react', 'minify']
          }
        }
      },
      {  
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  node: {
    fs: "empty"
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}