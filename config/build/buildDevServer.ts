import type { Configuration as DevServerConfiguration }
    from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: false,
        historyApiFallback: true,
        hot: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                pathRewrite: { '^/api': '/' },
            },
            '/locales': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/locales': '/public/locales' },
            },
        },
    };
}
