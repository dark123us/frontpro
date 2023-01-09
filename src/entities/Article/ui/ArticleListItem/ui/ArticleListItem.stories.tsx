import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleListItem } from './ArticleListItem';
import { Theme } from '@/shared/const/theme';

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
