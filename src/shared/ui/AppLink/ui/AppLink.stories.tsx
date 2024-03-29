import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
        children: 'Text Link',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    theme: AppLinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
    theme: AppLinkTheme.INVERTED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    theme: AppLinkTheme.INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
