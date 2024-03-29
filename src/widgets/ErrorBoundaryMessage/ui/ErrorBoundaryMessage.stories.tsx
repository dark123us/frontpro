import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { ErrorBoundaryMessage } from './ErrorBoundaryMessage';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Widgets/ErrorBoundaryMessage',
    component: ErrorBoundaryMessage,
    argTypes: {},
    args: {
        to: '/',
        children: 'Text Link',
    },
} as ComponentMeta<typeof ErrorBoundaryMessage>;

const Template: ComponentStory<typeof ErrorBoundaryMessage> = (args) => (
    <ErrorBoundaryMessage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
