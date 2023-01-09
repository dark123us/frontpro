import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { ArticleEditPage } from './ArticleEditPage';
import { Theme } from '@/shared/const/theme';

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
