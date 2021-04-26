const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const copyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack");
module.exports = {
  entry: {
    previewer: "./src/js/previewer.js",
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      filename: "previewer.html",
      title: "进度计划",
      inject: "head",
      chunks: ["base", "previewer"],
      template: "./src/previewer.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      jquery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
     }),
    // new webpack.copyWebpackPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, './libs'), to: "libs" }
    //   ],
    // }),
  ],
  // resolve: {
  //   alias: {
  //     project: path.resolve(__dirname, "./libs/project.min.js"),
  //     zpert: path.resolve(__dirname, "./libs/zpert.js"),
  //     zpertAsm:path.resolve(__dirname, "./libs/zpert.asm.js"),
  //   },
  // },
};
