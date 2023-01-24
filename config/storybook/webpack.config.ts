import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { cssLoader } from '../build/loaders/cssLoader';
import { fileLoader } from '../build/loaders/fileLoaders';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        template: '',
        build: '',
        entry: '',
        locales: '',
        buildLocales: '',
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config!.module!.rules.push(cssLoader(true));
    config!.module!.rules.push(fileLoader);
    config!.module!.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('http://localhost:6006'),
            __PROJECT__: JSON.stringify('storybook'),
            // __API__: JSON.stringify(''),
        }),
    );

    return config;
};
