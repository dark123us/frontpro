import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'TEMPLATE/ListBox',
    component: ListBox,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
