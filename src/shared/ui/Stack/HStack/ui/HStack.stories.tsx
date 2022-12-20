import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HStack } from './HStack';

export default {
    title: 'Shared/Stack/HStack',
    component: HStack,
    args: {

        style: {
            width: '100%',
            height: '100vh',
        },
        align: 'center',
        justify: 'center',
        children: (
            <>
                <div>first</div>
                <div>second</div>
                <div>third</div>
                <div>fourth</div>
            </>
        ),

    },
    argTypes: {},
} as ComponentMeta<typeof HStack>;

const Template: ComponentStory<typeof HStack> = (args) => (
    <HStack {...args} />
);

export const Main = Template.bind({});
