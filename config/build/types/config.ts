export type BuildMode = 'production' | 'development';

export type BuildPaths = {
    entry: string;
    build: string;
    template: string;
    src: string
    locales: string
    buildLocales: string
}

export type BuildEnv = {
    mode: BuildMode;
    port: number;
    analyze: boolean;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number;
    isBundleAnalyzer: boolean;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}
