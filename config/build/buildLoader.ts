import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { cssLoader } from './loaders/cssLoader';

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

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const styleLoader = cssLoader(options.isDev);
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
