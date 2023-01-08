import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { AvatarDropdown } from './AvatarDropdown';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';

export default {
    title: 'TEMPLATE/AvatarDropdown',
    component: AvatarDropdown,
    args: {},
    argTypes: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => (
    <AvatarDropdown {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
