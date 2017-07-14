import { join, resolve } from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const include = join(__dirname, 'client')
const DEBUG = process.env.NODE_ENV !== 'production'

export default {
  entry: {
    test: './client',
  },
  output: {
    path: join(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: `[name]__[local]${DEBUG
                  ? ''
                  : '-[hash:base64:4]'}`,
                minimize: true,
                discardComments: { removeAll: true },
              },
            },
            'postcss-loader',
          ],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: `[name]${DEBUG ? '' : '.[contenthash]'}.css`,
      disable: false,
      allChunks: true,
      ignoreOrder: true,
    }),
  ],

  devServer: {
    contentBase: 'docs/',
  },
}
