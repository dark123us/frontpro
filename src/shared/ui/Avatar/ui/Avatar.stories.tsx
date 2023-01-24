import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarImage from '@/shared/assets/test/avatar.jpg';
import { Avatar } from './Avatar';

export default {
    title: 'Shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    src: AvatarImage,
};

export const Large = Template.bind({});
Large.args = {
    size: 200,
    src: AvatarImage,
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: AvatarImage,
};
