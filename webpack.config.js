var path = require('path')

module.exports = {
  entry : './src/scripts/index.jsx',
  output : {
    path : path.join(__dirname, '/build'),
    filename: 'bundle.js'
  },
  resolve : {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.js|.jsx$/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
}
