import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { NotificationButton } from './NotificationButton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Features/NotificationButton',
    component: NotificationButton,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
