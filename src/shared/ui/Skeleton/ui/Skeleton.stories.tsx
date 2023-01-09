import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Skeleton',
    component: Skeleton,
    argTypes: {},
    args: {
        width: '100%',
        height: 200,
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
};

export const Circle = Template.bind({});
Circle.args = {
    width: 100,
    height: 100,
    border: '50%',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
    width: 100,
    height: 100,
    border: '50%',
};
DarkCircle.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const OrangeCircle = Template.bind({});
OrangeCircle.args = {
    width: 100,
    height: 100,
    border: '50%',
};
OrangeCircle.decorators = [ThemeDecorator(Theme.ORANGE)];
