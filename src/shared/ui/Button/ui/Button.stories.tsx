import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'Shared/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button Text',
    theme: ButtonTheme.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Button Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button Text',
    theme: ButtonTheme.OUTLINE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button Text',
    theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Button Text',
    theme: ButtonTheme.BACKGROUND,
};
BackgroundTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

export const BackgroundInvertedTheme = Template.bind({});
BackgroundInvertedTheme.args = {
    children: 'Button Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedTheme.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareM = Template.bind({});
SquareM.args = {
    children: '<',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
SquareM.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareL = Template.bind({});
SquareL.args = {
    children: '<',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
SquareL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SquareXL = Template.bind({});
SquareXL.args = {
    children: '<',
    square: true,
    size: ButtonSize.XL,
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
SquareXL.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'disabled',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
};
Disabled.decorators = [ThemeDecorator(Theme.LIGHT)];
