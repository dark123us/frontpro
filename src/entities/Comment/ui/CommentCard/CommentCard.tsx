import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.commentCard, {}, [className, cls.loading])}>
                <div className={cls.header}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton height={50} width="100%" className={cls.text} />
            </div>

        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(cls.commentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                <Avatar size={30} src={comment.user.avatar} />
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </div>
    );
});
