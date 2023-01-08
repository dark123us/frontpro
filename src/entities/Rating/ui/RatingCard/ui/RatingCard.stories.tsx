import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { RatingCard } from './RatingCard';

export default {
    title: 'TEMPLATES/RatingCard',
    component: RatingCard,
    args: {},
    decorators: [StoreDecorator({})],
    argTypes: {},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];