import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { VStack } from 'shared/ui/Stack';
import { NotificationItem } from '../../NotificationItem';
import { useNotifications } from '../../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
    children?: ReactNode;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    const { data, isLoading } = useNotifications(null);
    return (
        <VStack
            gap="16"
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
});
