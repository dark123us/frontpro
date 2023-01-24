import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Entities/Notification/NotificationList',
    component: NotificationList,
    decorators: [StoreDecorator({ user: { authData: { id: '1' } } }), withMock],
    args: {},
    argTypes: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/notifications`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        id: '1',
                        title: 'Уведомление',
                        description: 'Поставь лайк, оставь коммент',
                    },
                    {
                        id: '1',
                        title: 'Уведомление 123',
                        description: 'описание уведомления',
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => (
    <NotificationList {...args} />
);

export const Light = Template.bind({});

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
