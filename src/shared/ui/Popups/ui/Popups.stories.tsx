import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Popups } from './Popups';
import { Theme } from '@/shared/const/theme';

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
