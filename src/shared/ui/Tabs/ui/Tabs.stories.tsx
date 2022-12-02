import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'Shared/Tabs',
    component: Tabs,
    args: {
        tabs: [
            { value: 'tab 1', content: <div>tab 1</div> },
            { value: 'tab 2', content: <div>tab 2</div> },
            { value: 'tab 3', content: <div>tab 3</div> },
        ],
        value: 'tab 1',
        onTabClick: action('onTabClick'),

    },
    argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => (
    <Tabs {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
