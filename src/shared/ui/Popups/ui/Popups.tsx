import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Popups.module.scss';

interface PopupsProps {
    className?: string;
    children?: ReactNode;
}

export const Popups = memo((props: PopupsProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Popups, {}, [className])}>
            {children}
        </div>
    );
});
