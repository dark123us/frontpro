import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'Entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const IsLoading = Template.bind({});
IsLoading.args = {};
IsLoading.decorators = [
    StoreDecorator({
        articleDetails: { isLoading: true },

    }),
];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {};
IsLoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        articleDetails: { isLoading: true },

    }),
];
