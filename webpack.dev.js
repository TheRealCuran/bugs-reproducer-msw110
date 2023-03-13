/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable toplevel/no-toplevel-side-effect */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
})
