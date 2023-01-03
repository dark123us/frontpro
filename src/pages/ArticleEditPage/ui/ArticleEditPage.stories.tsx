import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { ArticleEditPage } from './ArticleEditPage';

export default {
    title: 'Pages/ArticleEditPage',
    component: ArticleEditPage,
    args: {},
    argTypes: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => (
    <ArticleEditPage {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
