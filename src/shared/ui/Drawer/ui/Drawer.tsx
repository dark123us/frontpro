import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { useDrag } from '@use-gesture/react';
import { a, useSpring, config } from '@react-spring/web';
import { Portal } from '../../Portal/Portal';
import cls from './Drawer.module.scss';
import { Overlay } from '../../Overlay';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;
    const { t } = useTranslation();
    const { theme } = useTheme();

    const [{ y }, api] = useSpring(() => ({ y: 80 }));
    const bind = useDrag(() => {});

    const { close, isClosing, isMounted } = useModal({ animationDelay: 300, onClose, isOpen });

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };
    const classes = [className, theme, 'app_drawer'];

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, classes)}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
});
