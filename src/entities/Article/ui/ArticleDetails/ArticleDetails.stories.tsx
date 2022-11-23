import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';
import { mockArticle } from '../../model/selectors/articles.mock';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: { },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = mockArticle;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'error',
    },
})];
