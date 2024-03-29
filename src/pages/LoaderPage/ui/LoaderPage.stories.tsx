import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { LoaderPage } from './LoaderPage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Pages/LoaderPage',
    component: LoaderPage,
    argTypes: {},
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof LoaderPage>;

const Template: ComponentStory<typeof LoaderPage> = (args) => (
    <LoaderPage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
