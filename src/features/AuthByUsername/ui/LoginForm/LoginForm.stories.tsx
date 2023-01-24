import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'Features/LoginForm',
    component: LoginForm,
    argTypes: {},
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        login: {
            username: 'admin',
            password: '12345',
        },
    }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        login: {
            error: 'ERROR',
            username: 'admin',
            password: '12345',
        },
    }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
    StoreDecorator({
        login: {
            error: 'ERROR',
            username: 'admin',
            password: '12345',
            isLoading: true,
        },
    }),
];
