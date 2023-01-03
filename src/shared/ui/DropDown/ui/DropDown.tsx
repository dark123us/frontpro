import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropDownDirection } from 'shared/types/ui';
import { AppLink } from '../../AppLink';
import cls from './DropDown.module.scss';

export interface DropDownItems {
    disabled?: boolean
    content?: ReactNode
    onClick?: () => void
    href?: string
}

const mapDirection: Record<DropDownDirection, string> = {
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
    'bottom right': cls.optionsBottomRight,
    'bottom left': cls.optionsBottomLeft,
};

interface DropDownProps {
    className?: string;
    trigger: ReactNode;
    items: DropDownItems[]
    direction?: DropDownDirection
}

export const DropDown = (props: DropDownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'top right',
    } = props;
    const { t } = useTranslation();
    const optionsClasses = [cls.menu, mapDirection[direction]];
    return (
        <Menu
            as="div"
            className={classNames(cls.DropDown, {}, [className])}
        >
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Menu.Button className={cls.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items
                className={classNames('', {}, optionsClasses)}
            >
                {items.map((item, index) => {
                    const content = ({ active }: {active:boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [cls.active]: active }, [])}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );
                    const key = item.content?.toString() ?? index;
                    if (item.href) {
                        return (
                            <Menu.Item
                                key={key}
                                as={AppLink}
                                to={item.href}
                                disabled={item.disabled}
                            >
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item
                            key={key}
                            as={Fragment}
                            disabled={item.disabled}
                        >
                            {content}
                        </Menu.Item>

                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
