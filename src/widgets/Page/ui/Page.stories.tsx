import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { Page } from './Page';

export default {
    title: 'Widgets/Page',
    component: Page,
    argTypes: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
    <Page {...args} />
);

export const Main = Template.bind({});
Main.args = {
    children: <div>this is page</div>,
};
Main.decorators = [ThemeDecorator(Theme.DARK)];
