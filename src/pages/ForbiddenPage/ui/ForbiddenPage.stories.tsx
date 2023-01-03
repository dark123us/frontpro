import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { ForbiddenPage } from './ForbiddenPage';

export default {
    title: 'Pages/ForbiddenPage',
    component: ForbiddenPage,
    args: {},
    argTypes: {},
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
    <ForbiddenPage {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
];
