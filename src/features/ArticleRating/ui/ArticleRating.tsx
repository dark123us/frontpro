import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleRatingProps {
    className?: string;
    children?: ReactNode;
    articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        children,
        articleId,
    } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

    const onAccept = useCallback(() => {

    }, []);

    const onCancel = useCallback((starsCount: number) => {

    }, []);

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв')}
            hasFeedback
        >
            {children}
        </RatingCard>
    );
});
