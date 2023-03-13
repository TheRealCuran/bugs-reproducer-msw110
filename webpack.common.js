/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable toplevel/no-toplevel-side-effect */
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    mytool: {
      import: './src/index.tsx',
      filename: '[name].[contenthash:8].js',
    },
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '_common/[id].[chunkhash:8].js',
    chunkFilename: '_common/[id].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
    ],
  },
  // development builds are duplicating code, production is chunked
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['mytool'],
    }),
  ],
}
