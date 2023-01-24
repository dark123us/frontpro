import { ComponentStory, ComponentMeta } from '@storybook/react';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Icon } from './Icon';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Icon',
    component: Icon,
    argTypes: {},
    args: {
        Svg: EyeIcon,
    },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
