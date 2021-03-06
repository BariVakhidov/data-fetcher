const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { NODE_ENV, PRODUCTION } = require('./webpack/utils/constants');

module.exports = {
  mode: NODE_ENV || PRODUCTION,
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Common': path.resolve(__dirname, 'src/components/common/'),
      '@Utilities': path.resolve(__dirname, 'src/utilities/'),
      '@API': path.resolve(__dirname, 'src/api/'),
      '@Redux': path.resolve(__dirname, 'src/redux/'),
      '@Types': path.resolve(__dirname, 'src/types/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/template/index.html',
      title: 'Data Fetcher',
    }),
    new MiniCssExtractPlugin(),
  ],
};
