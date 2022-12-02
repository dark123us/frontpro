import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
    title: 'entities/ArticleList/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args, context) => (
    <ArticleSortSelector {...args} />
);

export const Main = Template.bind({});
Main.args = {

};
Main.decorators = [ThemeDecorator(Theme.DARK)];
