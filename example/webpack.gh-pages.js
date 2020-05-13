const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/vue-dropbox'
  },
  resolve: {
    alias: {
      dropbox: path.resolve(__dirname, '../src/index.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    }),
    new VueLoaderPlugin()
  ]
}
