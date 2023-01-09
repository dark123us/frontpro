import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Input } from './Input';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Input',
    component: Input,
    argTypes: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'placeholder',
    value: '123123',
};

export const Dark = Template.bind({});
Dark.args = {
    placeholder: 'placeholder',
    value: '123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
