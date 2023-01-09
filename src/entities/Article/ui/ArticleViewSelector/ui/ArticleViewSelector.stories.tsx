import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleView } from '../../../model/consts/article';
import { ArticleViewSelector } from './ArticleViewSelector';
import { Theme } from '@/shared/const/theme';

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
