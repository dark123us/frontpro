import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildLoader} from "./buildLoader";
import {buildResolvers} from "./buildResolvers";
import {buildPlugin} from "./buildPlugin";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options:BuildOptions):webpack.Configuration{
    const {mode, paths, isDev} = options;
    return {
        mode,
        entry: {
            main: paths.entry,
        },
        output: {
            path: paths.build,
            // filename: '[name].[contenthash].js',
            filename: '[name].js',
            clean: true
        },
        module: {
            rules: buildLoader(),
        },
        resolve: buildResolvers(),
        plugins: buildPlugin(options),
        devtool: isDev? 'eval-cheap-module-source-map': undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}