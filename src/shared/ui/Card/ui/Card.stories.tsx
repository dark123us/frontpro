import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../Text';
import { Card } from './Card';

export default {
    title: 'Shared/Card',
    component: Card,
    argTypes: {},
    args: {
        children: <Text title="title" text="text" />,
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
