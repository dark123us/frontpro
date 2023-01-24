import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VStack } from './VStack';

export default {
    title: 'Shared/Stack/VStack',
    component: VStack,
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
} as ComponentMeta<typeof VStack>;

const Template: ComponentStory<typeof VStack> = (args) => <VStack {...args} />;

export const Main = Template.bind({});
Main.args = {};
