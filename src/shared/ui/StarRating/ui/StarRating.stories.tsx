import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { StarRating } from './StarRating';

export default {
    title: 'Shared/StarRating',
    component: StarRating,
    args: {},
    decorators: [StoreDecorator({})],
    argTypes: {},
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
