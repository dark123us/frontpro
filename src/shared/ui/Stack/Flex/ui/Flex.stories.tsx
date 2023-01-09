import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ThemeDecorator,
} from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Flex } from './Flex';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'Shared/Stack/Flex',
    component: Flex,
    args: {
        style: {
            width: '100%',
            height: '100vh',
        },
        align: 'center',
        direction: 'row',
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
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
    <Flex {...args} />
);

export const Row = Template.bind({});
Row.args = {
    direction: 'row',
};
Row.decorators = [ThemeDecorator(Theme.LIGHT)];

export const RowGap8 = Template.bind({});
RowGap8.args = {
    direction: 'row',
    gap: '8',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    direction: 'row',
    gap: '32',
};

export const Column = Template.bind({});
Column.args = {
    direction: 'column',
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
    direction: 'column',
    gap: '8',
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
    direction: 'column',
    gap: '32',
};
