import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleInfiniteList } from './ArticleInfiniteList';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'TEMPLATE/ArticleInfiniteList',
    component: ArticleInfiniteList,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
