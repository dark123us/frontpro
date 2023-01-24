import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { cssLoader } from "./loaders/cssLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { fileLoader } from "./loaders/fileLoaders";

export function buildLoader(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const styleLoader = cssLoader(options.isDev);
    const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,

        // babelLoader,
        // typescriptLoader,
        styleLoader,
    ];
}
