const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const webpackMerge = require("webpack-merge");

module.exports = ({ mode } = { mode: "development" }) => {
  return webpackMerge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: {
              loader: "html-loader"
            }
          }
        ]
      },
      entry: ["whatwg-fetch", "promise-polyfill", "./src/index.jsx"],
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
      },
      plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
    },
    modeConfig(mode)
  );
};
