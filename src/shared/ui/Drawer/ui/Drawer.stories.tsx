import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Drawer } from './Drawer';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Drawer',
    component: Drawer,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
    <Drawer {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
