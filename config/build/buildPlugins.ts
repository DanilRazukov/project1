import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildPaths} from "./types/config";
import {VueLoaderPlugin} from "vue-loader";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins(path: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: path.html }),
    new webpack.ProgressPlugin(),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    })
  ]
}
