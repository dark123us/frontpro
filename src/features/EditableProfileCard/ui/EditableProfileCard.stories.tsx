import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Features/EditableProfileCard',
    component: EditableProfileCard,
    args: {},
    decorators: [StoreDecorator({})],
    argTypes: {},
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Main = Template.bind({});
Main.args = {};
Main.decorators = [ThemeDecorator(Theme.DARK)];
