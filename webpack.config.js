var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'app/scripts/index.js')
  ],
  output: {
    path : path.join(__dirname, '/dist/'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new ExtractTextPlugin({
      filename: "app.css",
      allChunks: true
    }),
    new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js|.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react']
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(ttf|otf)$/,
        loader: 'url-loader?limit=1000'
      }
    ]
  }
}
