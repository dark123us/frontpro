import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const mode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 4000;
    const isBundleAnalyzer = env.analyze || false;
    // const apiUrl = env.apiUrl ?? `http://localhost:${port}/api`; // применяется в buildPlugin как __API__
    const apiUrl = env.apiUrl ?? '/api'; // применяется в buildPlugin как __API__

    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),

    };

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
        isBundleAnalyzer,
        apiUrl,
        project: 'frontend',
    });
};
