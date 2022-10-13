import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
    title: 'Widgets/Button',
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
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button Text',
    theme: ThemeButton.OTLINE,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Button Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Button Text',
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button Text',
    theme: ThemeButton.OTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
