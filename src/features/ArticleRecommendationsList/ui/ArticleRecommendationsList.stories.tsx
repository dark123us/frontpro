import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { ArticleRecommendationsList } from './ArticleRecommendationsList';

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asdfsadf',
};

export default {
    title: 'Features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    args: {},
    argTypes: {},
    decorators: [StoreDecorator({}), withMock],
    parameters: {
        mockData: [{
            url: `${__API__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],

        }],
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
