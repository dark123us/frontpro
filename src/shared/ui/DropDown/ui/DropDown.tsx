import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import cls from './DropDown.module.scss';

interface DropDownProps {
    className?: string;
    children?: ReactNode;
}

export const DropDown = (props: DropDownProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <Menu
            as="div"
            className={classNames(cls.DropDown, {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Menu.Button className={cls.btn}>More</Menu.Button>
            <Menu.Items className={cls.menu}>
                <Menu.Item as={Fragment}>
                    {({ active }) => (
                        // eslint-disable-next-line i18next/no-literal-string
                        <li className={classNames(cls.item, { [cls.active]: active }, [])}>settings</li>
                    )}
                </Menu.Item>
            </Menu.Items>
            {children}
        </Menu>
    );
};
