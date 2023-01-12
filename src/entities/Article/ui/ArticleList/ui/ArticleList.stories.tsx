import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleList } from './ArticleList';
import { Theme } from '@/shared/const/theme';
import { Article } from '../../../model/types/article';
import { ArticleType, ArticleView } from '../../../model/consts/article';

const article: Article = {
    id: '1',
    user: { id: '1', username: 'username' },
    title: 'Title',
    subtitle: 'subtitle',
    img: 'https://cs14.pikabu.ru/avatars/101/v101542-1767517290.png',
    views: 3,
    createdAt: '23.01.2023',
    type: [ArticleType.IT],
    blocks: [],
};

export default {
    title: 'Entities/ArticleList',
    component: ArticleList,
    args: {
        articles: [
            { ...article, views: 120 },
            { ...article, views: 10 },
            { ...article, views: 80 },
        ],
        view: ArticleView.TILE,
    },
    argTypes: {},
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];

export const NotFound = Template.bind({});
NotFound.args = { articles: [] };
