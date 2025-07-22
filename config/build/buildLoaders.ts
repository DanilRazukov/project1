import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader =       {
      test: /\.svg$/,
      use: [
        'vue-loader',
        'vue-svg-loader',
      ],
  }

  const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
  }

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
        loader: 'sass-loader'
      }
    ]
  }

  const babelLoader = {
    test: /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  return [
    babelLoader,
    vueLoader,
    typeScriptLoader,
    styleLoader,
    svgLoader,
    fileLoader
  ]
}
