export enum BUILD_MODE {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
}

export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
  pages: string,
  public: string,
}

export interface BuildOptions {
  mode: BUILD_MODE,
  paths: BuildPaths,
  port: number,
  isDev: boolean
}
