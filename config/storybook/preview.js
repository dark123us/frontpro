import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
} from '../../src/shared/config/Storybook/Decorators/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/Storybook/Decorators/ThemeDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';
import {
    BrowserDecorator,
} from '../../src/shared/config/Storybook/Decorators/BrowserDecorator';
import {
    SuspenseDecorator,
} from '../../src/shared/config/Storybook/Decorators/SuspenseDecorator';
// import {
//     TranslationDecorator,
// } from '../../src/shared/config/Storybook/Decorators/TranslationDecorator';

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
addDecorator(SuspenseDecorator);
// addDecorator(TranslationDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(BrowserDecorator);
