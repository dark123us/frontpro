import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import { NotificationList } from 'entities/Notification';
import { Popover } from 'shared/ui/Popups';
import cls from './NotificationButton.module.scss';

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
    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction="bottom left"
            trigger={(
                <Button theme={ButtonTheme.CLEAR}>
                    <Icon Svg={NotificationIcon} inverted />
                </Button>
            )}

        >
            <NotificationList className={cls.notifications} />
        </Popover>
    );
});
