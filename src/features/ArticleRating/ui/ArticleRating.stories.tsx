import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { ArticleRating } from './ArticleRating';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Features/ArticleRating',
    component: ArticleRating,
    args: {},
    decorators: [StoreDecorator({ user: { authData: { id: '1' } } }), withMock],
    argTypes: {},
    parameters: {
        mockData: [
            {
                url: `${__API__}/article-ratings?userId=1&articleId=1`,
                method: 'GET',
                status: 200,
                response: [
                    {
                        rate: 4,
                    },
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
    <ArticleRating {...args} />
);

export const Light = Template.bind({});
Light.args = { articleId: '1' };

export const Dark = Template.bind({});
Dark.args = { articleId: '1' };
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithoutRate = Template.bind({});
WithoutRate.args = {};
