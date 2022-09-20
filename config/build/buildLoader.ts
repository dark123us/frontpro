import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoader(options: BuildOptions):webpack.RuleSetRule[]{
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (fPath: string) => Boolean(fPath.includes('.module.scss')),
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:6]"
                            : "[hash:base64:8]",
                    }
                }
            },
            "sass-loader",
        ],
    }
    const typescriptLoader  = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        typescriptLoader,
        styleLoader,
    ]
}