import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'TEMPLATE/ArticleDetailsComments',
    component: ArticleDetailsComments,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
