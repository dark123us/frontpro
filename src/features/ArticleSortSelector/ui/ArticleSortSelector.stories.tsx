import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ArticleSortSelector } from './ArticleSortSelector';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Features/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args, context) => (
    <ArticleSortSelector {...args} />
);

export const Main = Template.bind({});
Main.args = {

};
Main.decorators = [ThemeDecorator(Theme.DARK)];
