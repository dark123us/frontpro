import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                data-testid="CommentCard.Loading"
                className={classNames(cls.commentCard, {}, [className, cls.loading])}
            >
                <div className={cls.header}>
                    <Skeleton border="50%" width={30} height={30} />
                    <Skeleton height={16} width={100} className={cls.username} />
                </div>
                <Skeleton height={50} width="100%" className={cls.text} />
            </VStack>

        );
    }

    if (!comment) return null;

    return (
        <VStack
            data-testid="CommentCard.Content"
            max
            gap="8"
            className={classNames(cls.commentCard, {}, [className])}
        >
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                <Avatar size={30} src={comment.user.avatar} />
                <Text className={cls.username} text={comment.user.username} />
            </AppLink>
            <Text text={comment.text} className={cls.text} />
        </VStack>
    );
});
