import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Page } from './Page';

export default {
    title: 'TEMPLATE/Page',
    component: Page,
    argTypes: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = () => (
    <Page />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
