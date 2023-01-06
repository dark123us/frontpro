import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    children?: ReactNode;
    onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
    const {
        className,
        children,
        onClick,
    } = props;
    const { t } = useTranslation();
    return (
        <div
            onClick={onClick}
            className={classNames(cls.Overlay, {}, [className])}
        >
            {children}
        </div>
    );
});
