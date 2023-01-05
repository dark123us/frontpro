import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { AvatarDropdown } from './AvatarDropdown';

export default {
    title: 'TEMPLATE/AvatarDropdown',
    component: AvatarDropdown,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
