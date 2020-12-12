const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx",
  target: "web",
  context: resolve(__dirname, "./src"),
  module: {
    rules: [
      {
        exclude: /\.test.tsx?$/,
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: "./index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
      },
      template: "./index.html",
      title: "eBay Template Generator",
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
};
