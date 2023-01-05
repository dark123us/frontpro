import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Card } from 'widgets/Card';
import { CardTheme } from 'widgets/Card/ui/Card';
import { Text } from 'shared/ui/Text';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../../model/types/notification';

interface NotificationItemProps {
    className?: string;
    children?: ReactNode;
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {
        className,
        children,
        item,
    } = props;
    const { t } = useTranslation();
    const content = (
        <Card
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
        >
            <Text title={item.title} text={item.description} />
        </Card>
    );
    if (item.href) {
        return (
            <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
                {content}
            </a>
        );
    }
    return content;
});
