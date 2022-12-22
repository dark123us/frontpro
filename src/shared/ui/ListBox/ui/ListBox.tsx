import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    Fragment, memo, ReactNode, useState,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { Button } from '../../Button';
import cls from './ListBox.module.scss';

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

}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        items,
        defaultValue,
        value,
        onChange,
    } = props;

    const [selected, setSelected] = useState<ListBoxItem>();

    const { t } = useTranslation();
    return (
        <HListBox
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
            value={value}
            onChange={onChange}
        >
            <HListBox.Button className={cls.trigger}>
                <Button>
                    {value ?? defaultValue}
                </Button>
            </HListBox.Button>
            <HListBox.Options className={cls.options}>
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
                            </li>
                        )}
                    </HListBox.Option>
                ))}

            </HListBox.Options>
        </HListBox>
    );
});
