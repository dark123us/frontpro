import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { AddCommentForm } from './AddCommentForm';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {},
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = () => (
    <AddCommentForm onSendComment={() => {}} />
);

export const Main = Template.bind({});
Main.args = {
    onSendComment: action('onSendComment'),
};
Main.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
