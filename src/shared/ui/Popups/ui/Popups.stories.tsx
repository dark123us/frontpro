import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Popups } from './Popups';

export default {
    title: 'TEMPLATE/Popups',
    component: Popups,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof Popups>;

const Template: ComponentStory<typeof Popups> = (args) => (
    <Popups {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
