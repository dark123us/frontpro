import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'TEMPLATE/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
