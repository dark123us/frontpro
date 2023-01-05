import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Portal } from '../../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();
    const mods: Mods = {
        [cls.opened]: isOpen,
    };
    const classes = [className, theme, 'app_drawer'];

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, classes)}>
                <Overlay onClick={onClose} />
                <div className={cls.content}>
                    {children}
                </div>

            </div>
        </Portal>
    );
});
