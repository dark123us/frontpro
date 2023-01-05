import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { HStack } from '../../../../Stack';
import { Button } from '../../../../Button';
import cls from './ListBox.module.scss';
import { DropDownDirection } from '../../../../../types/ui';

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

const mapDirection: Record<DropDownDirection, string> = {
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
};

interface ListBoxProps {
    items?: ListBoxItem[]
    className?: string;
    value?: string
    defaultValue?: string
    onChange: <T extends string>(value: T) => void
    readonly?: boolean
    direction?: DropDownDirection
    label?: string
}

export const ListBox = (props: ListBoxProps) => {
    const {
        className,
        items,
        defaultValue,
        value,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    const optionsClasses = [cls.options, mapDirection[direction]];

    return (
        <HStack gap="4">
            {label && (
                <span>
                    {`${label} >`}
                </span>
            )}
            <HListBox
                as="div"
                disabled={readonly}
                className={classNames(cls.ListBox, {}, [className])}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    disabled={readonly}
                    className={cls.trigger}
                >

                    <Button disabled={readonly}>

                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={classNames('', {}, optionsClasses)}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(cls.item, {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled,

                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}

                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
