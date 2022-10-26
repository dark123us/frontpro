import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'Shared/Select',
    component: Select,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
    <Select {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    options: [
        { value: '1', content: '1234' },
        { value: '2', content: '2345' },
        { value: '3', content: '--2345--' },
    ],
};

export const Label = Template.bind({});
Label.args = {
    label: 'label',
    options: [
        { value: '1', content: '1234' },
        { value: '2', content: '2345' },
        { value: '3', content: '--2345--' },
    ],
    value: '2',
};
