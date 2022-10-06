import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { LoaderPage } from './LoaderPage';

export default {
    title: 'Pages/LoaderPage',
    component: LoaderPage,
    argTypes: {},
} as ComponentMeta<typeof LoaderPage>;

const Template: ComponentStory<typeof LoaderPage> = (args) => (
    <LoaderPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
