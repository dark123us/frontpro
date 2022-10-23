import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { cssLoader } from '../build/loaders/cssLoader';

export default ({ config }: {config:webpack.Configuration}) => {
    const paths: BuildPaths = {
        src: path.resolve(__dirname, '..', '..', 'src'),
        template: '',
        build: '',
        entry: '',
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('ts', 'tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push(cssLoader(true));
    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    });

    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
    }));

    return config;
};
