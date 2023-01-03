import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { AdminPanelPage } from './AdminPanelPage';

export default {
    title: 'TEMPLATE/AdminPanelPage',
    component: AdminPanelPage,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
    <AdminPanelPage {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
