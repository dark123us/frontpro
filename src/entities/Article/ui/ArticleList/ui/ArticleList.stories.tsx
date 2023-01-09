import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleList } from './ArticleList';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Entities/ArticleList',
    component: ArticleList,
    argTypes: {},
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const Main = Template.bind({});
Main.args = { articles: [] };
Main.decorators = [ThemeDecorator(Theme.DARK)];
