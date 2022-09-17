import path from 'path';

import webpack from 'webpack';
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/build/types/config";


export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 4000;

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        template: path.resolve(__dirname, 'public', 'index.html'),
    }

    const config: webpack.Configuration = buildWebpackConfig({mode, paths, isDev, env})

    return config;
}
