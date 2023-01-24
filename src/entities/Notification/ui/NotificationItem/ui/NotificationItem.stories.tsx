import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { NotificationItem } from './NotificationItem';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Entities/Notification/NotificationItem',
    component: NotificationItem,
    args: {
        item: {
            id: '1',
            title: 'title',
            href: 'http://localhost',
            description: 'description',
        },
    },
    argTypes: {},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
