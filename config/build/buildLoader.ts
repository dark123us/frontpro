import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoader(options: BuildOptions):webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const styleLoader = cssLoader(options.isDev);
    const babelLoader = buildBabelLoader(options.isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        styleLoader,
    ];
}
