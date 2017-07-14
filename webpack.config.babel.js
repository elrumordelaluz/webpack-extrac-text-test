import { join, resolve } from 'path'
const include = join(__dirname, 'src')

export default {
  entry: './client',
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
        include: [resolve(__dirname, './client')],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: 'docs/',
  },
}
