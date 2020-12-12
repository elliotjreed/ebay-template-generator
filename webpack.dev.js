const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.common");
const path = require("path");

module.exports = merge(commonConfig, {
  devServer: {
    contentBase: path.join(__dirname, "src"),
    hot: true,
    open: true,
    port: 8085,
    publicPath: "/",
    watchContentBase: true,
  },
  devtool: "inline-source-map",
  mode: "development",
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
