import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Button } from '../../../../Button';
import { DropDown } from './DropDown';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Popups/DropDown',
    component: DropDown,
    args: {
        trigger: <Button>Open</Button>,
        items: [
            { content: 'first' },
            { content: 'second' },
            { content: 'third', disabled: true },
            { content: 'fourth' },
        ],
    },
    argTypes: {},
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
    <DropDown {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
