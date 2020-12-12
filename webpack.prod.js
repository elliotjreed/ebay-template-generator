const { resolve, join } = require("path");
const { merge } = require("webpack-merge");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const glob = require("glob");
const commonConfig = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const PATHS = {
  src: join(__dirname, "src")
};

module.exports = merge(commonConfig, {
  devtool: "source-map",
  entry: "./index.tsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        styles: {
          chunks: "all",
          enforce: true,
          name: "styles",
          test: /\.css$/
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          name(module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace("@", "")}`;
          }
        }
      }
    }
  },
  output: {
    filename: "js/[name].[hash].min.js",
    path: resolve(__dirname, "./dist"),
    publicPath: "/"
  },
  plugins: [
    new WebpackPwaManifest({
      background_color: "#fff",
      crossorigin: "use-credentials",
      description: "DESCRIPTION",
      icons: [
        {
          sizes: [16, 32, 96, 128, 150, 180, 192, 256, 512, 1024],
          src: resolve("src/assets/img/icon.png")
        }
      ],
      inject: true,
      ios: true,
      name: "NAME",
      short_name: "SHORTNAME",
      theme_color: "#fff"
    }),
    new FaviconsWebpackPlugin("../src/assets/img/icon.png"),
    new MiniCssExtractPlugin({
      chunkFilename: "[id].[hash].css",
      filename: "[name].[hash].css"
    }),
    new PurgecssPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
    }),
    new CopyPlugin({ patterns: [{ from: "./assets/static", to: "./" }] }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
