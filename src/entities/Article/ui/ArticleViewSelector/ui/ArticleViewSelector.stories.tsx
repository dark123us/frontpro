import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleView } from '../../../model/types/article';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'entities/ArticleList/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
    <ArticleViewSelector {...args} />
);

export const Main = Template.bind({});
Main.args = {
    view: ArticleView.LIST,
};
Main.decorators = [ThemeDecorator(Theme.DARK)];
