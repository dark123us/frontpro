import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
} from '../../src/shared/config/Storybook/Decorators/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/Storybook/Decorators/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';
import {
    BrowserDecorator,
} from '../../src/shared/config/Storybook/Decorators/BrowserDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(BrowserDecorator);
