import webpack from 'webpack';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
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

    // {
    //     test: /\.s[ac]ss$/i,
    //     use: [
    //         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
    //         {
    //             loader: 'css-loader',
    //             options: {
    //                 modules: {
    //                     auto: (fPath: string) => Boolean(
    //                         fPath.includes('.module.scss'),
    //                     ),
    //                     localIdentName: options.isDev
    //                         ? '[path][name]__[local]--[hash:base64:6]'
    //                         : '[hash:base64:8]',
    //                 },
    //             },
    //         },
    //         'sass-loader',
    //     ],
    // };
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
