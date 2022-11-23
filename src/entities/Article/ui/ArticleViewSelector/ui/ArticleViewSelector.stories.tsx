import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
    title: 'TEMPLATE/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = () => (
    <ArticleViewSelector />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
