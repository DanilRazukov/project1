import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typeScriptLoader = {
    test: /\.ts$/,
    use: {
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    exclude: /node_modules/
  }

  const vueLoader = {
      test: /\.vue$/,
      loader: 'vue-loader'
  }

  const styleLoader = {
    test: /\.scss$/,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          additionalData: `@use "@/style/reset.scss";`
        }
      }
    ]
  }

  return [
    vueLoader,
    typeScriptLoader,
    styleLoader
  ]
}
