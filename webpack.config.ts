import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BUILD_MODE, BuildPaths} from "./config/build/types/config";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const PORT = parseInt(process.env.PORT || '3000', 10);
const MODE = (process.env.MODE || BUILD_MODE.DEVELOPMENT) as BUILD_MODE ;

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
  pages: path.resolve(__dirname, 'src', 'pages'),
}

const config: webpack.Configuration = buildWebpackConfig({
  mode: MODE,
  paths,
  isDev: MODE === BUILD_MODE.DEVELOPMENT,
  port: PORT
})

export default config
