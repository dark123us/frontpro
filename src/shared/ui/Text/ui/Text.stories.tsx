import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextTheme } from './Text';

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {},
    args: {
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'Text text text',
};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
    title: 'Title',
    text: 'Text text text',
    theme: TextTheme.ERROR,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Text text text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'Text text text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorThemeDark = Template.bind({});
ErrorThemeDark.args = {
    title: 'Title',
    text: 'Text text text',
    theme: TextTheme.ERROR,
};
ErrorThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text text text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
