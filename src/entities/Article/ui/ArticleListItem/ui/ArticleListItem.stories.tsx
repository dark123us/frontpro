import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleListItem } from './ArticleListItem';

export default {
    title: 'entities/ArticleList/ArticleListItem',
    component: ArticleListItem,
    argTypes: {},
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const Main = Template.bind({});
Main.args = { };
Main.decorators = [ThemeDecorator(Theme.DARK)];
