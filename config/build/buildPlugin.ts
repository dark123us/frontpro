import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugin(
    { paths, isDev, isBundleAnalyzer }:BuildOptions,
): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.template,
        }),
        new MiniCssExtractPlugin(
            { filename: 'css/[name].[contenthash:4].css' },
        ),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
    ];

    if (isDev) { plugins.push(new webpack.HotModuleReplacementPlugin()); }
    if (isBundleAnalyzer) { plugins.push(new BundleAnalyzerPlugin()); }

    return plugins;
}
