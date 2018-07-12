import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'
import OfflinePlugin from 'offline-plugin'
import path from 'path'
import config from '../utils/config'
import baseConfig from './base.config.js'

const { NODE_ENV = 'staging' } = process.env

module.exports = {
  ...baseConfig,
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    config('serviceWorker.enabled') && new OfflinePlugin(),
    config('cleanOnBuild') && new CleanWebpackPlugin(baseConfig.output.path, { root: path.join(__dirname, '..', '..') }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '..', 'utils', 'devTemplate.js'),
    }),
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
  ].filter(n => !!n),
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
