import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextSize, TextTheme } from './Text';

export default {
    title: 'Shared/Text',
    component: Text,
    argTypes: {},
    args: {
        title: 'Title',
        text: 'Text text text',
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
    <Text {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const ErrorTheme = Template.bind({});
ErrorTheme.args = {
    theme: TextTheme.ERROR,
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    title: '',
    text: 'Text text text',
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
    text: '',
};

export const FontS = Template.bind({});
FontS.args = {
    size: TextSize.S,
};

export const FontM = Template.bind({});
FontM.args = {
    size: TextSize.M,
};

export const FontL = Template.bind({});
FontL.args = {
    size: TextSize.L,
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
