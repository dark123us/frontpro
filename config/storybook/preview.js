import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
} from '../../src/shared/config/Storybook/Decorators/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/Storybook/Decorators/ThemeDecorator';
import {
    BrowserDecorator,
} from '../../src/shared/config/Storybook/Decorators/BrowserDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/Storybook/Decorators/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#0b299d' },
            { name: 'dark', class: Theme.DARK, color: '#045e0e' },
            { name: 'orange', class: Theme.ORANGE, color: '#8f710d' },
        ],
    },
};

addDecorator(StyleDecorator({}));
addDecorator(SuspenseDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(BrowserDecorator);
