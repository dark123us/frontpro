import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/shared/const/theme';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';

export default {
    title: 'Pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    args: {},
    decorators: [StoreDecorator({})],
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
