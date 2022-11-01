import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'Shared/Code',
    component: Code,
    argTypes: {},
    args: {
        text: 'import { memo, ReactNode } from \'react\';\n'
            + 'import { classNames } from \'shared/lib/classNames/classNames\';\n'
            + 'import cls from \'./Code.module.scss\';\n'
            + '\n'

            + '    className?: string;\n'
            + '    children: ReactNode;\n'
            + '}\n'
            + '\n'
            + 'export const Code = memo((props:CodeProps) => {\n'
            + '    const { className, text } = props;\n'
            + '    return (\n'
            + '        <pre>\n'
            + '            <code className={classNames(cls.code, {}, [className])}>\n'
            + '                {text}\n'
            + '            </code>\n'
            + '        </pre>\n'
            + '    );\n'
            + '});\n'
        ,
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => (
    <Code {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
