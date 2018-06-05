import webpack from 'webpack'
import path from 'path'
import nodeExternals from 'webpack-node-externals'
import config from './base.config'
import paths from '../paths'

const internalsFolder = path.join(__dirname, '..')

module.exports = {
  ...config,
  mode: process.env.NODE_ENV || 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(internalsFolder, 'server', 'index.js'),
  output: {
    path: paths.outputPath,
    filename: 'server.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.SERVER': JSON.stringify(true),
    }),
  ],
}
