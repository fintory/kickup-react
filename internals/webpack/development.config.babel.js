
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import baseConfig from './base.config.js'

module.exports = {
  ...baseConfig,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: './client',
    hot: true,
    port: 3000,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEVTOOLS__: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, '..', 'utils', 'devTemplate.js'),
    }),
  ],
}
