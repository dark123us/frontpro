import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleEditForm } from './ArticleEditForm';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'TEMPLATE/ArticleEditForm',
    component: ArticleEditForm,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ArticleEditForm>;

const Template: ComponentStory<typeof ArticleEditForm> = (args) => (
    <ArticleEditForm {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
