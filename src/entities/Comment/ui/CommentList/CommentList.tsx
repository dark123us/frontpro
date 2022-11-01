import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?:boolean;
    error?: string
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className, comments, isLoading, error,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard
                        isLoading={isLoading}
                        key={comment.id}
                        comment={comment}
                        className={cls.comment}
                    />
                ))
                : (
                    <Text text={t('Comments not found')} />
                )}
        </div>
    );
});
