import { Fragment, ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../../Stack';
import { Button } from '../../../../Button';
import cls from './ListBox.module.scss';
import popupCls from '../../../styles/styles.module.scss';
import { DropDownDirection } from '../../../../../types/ui';
import { mapDirectionClass } from '../../../consts/const';

export interface ListBoxItem {
    value: string
    content: ReactNode
    disabled?: boolean
}

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

    const optionsClasses = [cls.options, mapDirectionClass[direction]];

    return (
        <HStack
            gap="4"
            className={classNames(cls.ListBox, {}, [className, popupCls.popup])}
        >
            {label && (
                <span>
                    {`${label} >`}
                </span>
            )}
            <HListBox
                as="div"
                disabled={readonly}
                value={value}
                onChange={onChange}
            >

                <HListBox.Button
                    as="div"
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
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,

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
