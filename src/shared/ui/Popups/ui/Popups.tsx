import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Popover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popups.module.scss';

interface PopupsProps {
    className?: string;
    children?: ReactNode;
}

export const Popups = memo((props: PopupsProps) => {
    const { className, children } = props;
    const { t } = useTranslation();
    return (
        <Popover className={classNames(cls.Popups, {}, [className])}>
            {children}
        </Popover>
    );
});
