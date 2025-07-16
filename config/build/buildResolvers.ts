import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [ '.ts', '.js', '.vue' ],
    alias: {
      'vue': '@vue/runtime-dom',
      src: options.paths.src,
      pages: options.paths.pages
    },
    modules: [
      options.paths.src,
      'node_modules'
    ],
    preferAbsolute: true,
    mainFiles: ['index']
  }
}
