var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './example/example.js',
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.resolve(__dirname, './example/build'),
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, './example')
  },
  resolve: {
    alias: {
      'react-card-flip': path.resolve(__dirname, './src/ReactCardFlip')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared'),
    new webpack.LoaderOptionsPlugin({ debug: true })
  ]
};
