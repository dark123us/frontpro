import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Text } from '../../Text';
import { Card } from './Card';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Widgets/Card',
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
