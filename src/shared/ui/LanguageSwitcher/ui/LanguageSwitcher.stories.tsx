import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { LanguageSwitcher } from './LanguageSwitcher';

export default {
    title: 'Shared/LanguageSwitcher',
    component: LanguageSwitcher,
    argTypes: {},
    args: {
        to: '/',
        children: 'Text Link',
    },
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
    <LanguageSwitcher {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
