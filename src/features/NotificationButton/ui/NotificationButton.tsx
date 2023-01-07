import { useTranslation } from 'react-i18next';
import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { Popover } from '@/shared/ui/Popups';
import { Drawer } from '@/shared/ui/Drawer';
import cls from './NotificationButton.module.scss';
import { isDetectMobileDevice } from '@/shared/lib/DetectMobile/isDetectMobile';

interface NotificationButtonProps {
    className?: string;
    children?: ReactNode;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, [setIsOpen]);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const trigger = (
        <Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
            <Icon Svg={NotificationIcon} inverted />
        </Button>
    );

    if (isDetectMobileDevice()) {
        return (
            <>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList />
                </Drawer>
            </>
        );
    }

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={trigger}
        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
