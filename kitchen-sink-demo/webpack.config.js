"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  stats: {
    colors: true,
    reasons: true
  },
  entry: {
    app: "./src/app.ts",
    vendor: "./vendor.ts"
  },
  output: {
    path: path.resolve(__dirname, "app"),
    filename: "[name].[hash].bundle.js",
    publicPath: "/",
    sourceMapFilename: "[name].[hash].bundle.js.map",
    chunkFilename: "[id].chunk.js"
  },
  devtool: "source-map",
  resolve: {
    extensions: ["webpack.js", ".web.js", ".ts", ".js"]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
      minify: false
    }),
    new DashboardPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        use: "tslint-loader"
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: "source-map-loader"
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: "source-map-loader"
      },
      { test: /\.ts$/, use: ['@angularclass/hmr-loader', 'ts-loader', 'angular2-template-loader', 'angular2-router-loader'] },
      { test: /\.html$/, use: "raw-loader" },
      { test: /\.css$/, use: "style-loader!css-loader?sourceMap" },
      { test: /\.svg/, use: "url-loader" },
      { test: /\.eot/, use: "url-loader" },
      { test: /\.woff/, use: "url-loader" },
      { test: /\.woff2/, use: "url-loader" },
      { test: /\.ttf/, use: "url-loader" }
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
  },
  devServer: {
    inline: true,
    contentBase: "./app",
    publicPath: "/"
  }
}
