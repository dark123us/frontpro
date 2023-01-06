import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Popover as PopoverHeadless } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropDownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import popupCls from '../../../styles/styles.module.scss';
import { mapDirectionClass } from '../../../consts/const';

interface PopoverProps {
    className?: string;
    children?: ReactNode;
    direction?: DropDownDirection
    trigger: ReactNode
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className,
        children,
        trigger,
        direction = 'bottom right',
    } = props;
    const { t } = useTranslation();
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <PopoverHeadless
            className={classNames(cls.Popover, {}, [className, popupCls.popup])}
        >
            <PopoverHeadless.Button className={popupCls.trigger}>
                {trigger}
            </PopoverHeadless.Button>
            <PopoverHeadless.Panel
                className={classNames(cls.panel, {}, menuClasses)}
            >
                {children}
            </PopoverHeadless.Panel>
        </PopoverHeadless>
    );
});
