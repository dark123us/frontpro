import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugin({paths}:BuildOptions): webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({
            template: paths.template
        }),
        new webpack.ProgressPlugin(),

    ]
}