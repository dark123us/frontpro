import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { NotFoundPage } from './NotFoundPage';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';

export default {
    title: 'Pages/NotFoundPage',
    component: NotFoundPage,
    decorators: [StoreDecorator({})],
    argTypes: {},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => (
    <NotFoundPage />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
