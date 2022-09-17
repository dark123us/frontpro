export type BuildMode = "production" | "development";

export type BuildPaths = {
    entry: string;
    build: string;
    template: string;
}

export type BuildEnv = {
    mode: BuildMode;
    port: number;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    env: BuildEnv;
}
