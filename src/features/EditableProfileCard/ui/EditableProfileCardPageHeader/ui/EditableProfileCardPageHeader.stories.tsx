import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { EditableProfileCardPageHeader } from './EditableProfileCardPageHeader';

export default {
    title: 'TEMPLATE/EditableProfileCardPageHeader',
    component: EditableProfileCardPageHeader,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof EditableProfileCardPageHeader>;

const Template: ComponentStory<typeof EditableProfileCardPageHeader> = (args) => (
    <EditableProfileCardPageHeader {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
