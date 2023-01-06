import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ListBox } from './ListBox';

export default {
    title: 'Shared/Popups/ListBox',
    component: ListBox,
    args: {
        value: '234',
        items: [
            { value: '234', content: '234' },
            { value: '345', content: '345' },
            { value: 'asdfadsf', content: 'asdfadsf', disabled: true },
            { value: 'asdfdsaf', content: 'asdfdsaf' },
        ],
    },
    argTypes: {},
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];

export const TopLeft = Template.bind({});
TopLeft.args = {
    direction: 'top left',
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'top right',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottom left',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottom right',
};
