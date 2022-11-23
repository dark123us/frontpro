import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleList } from './ArticleList';

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
