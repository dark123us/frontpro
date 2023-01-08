import { memo, ReactNode, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '@/features/ArticleRating/api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
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
    const userId = userData?.id ?? '';
    const { data, isLoading } = useArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRatingArticle = useCallback((rate: number, feedback?: string) => {
        rateArticleMutation({
            articleId,
            rate,
            userId,
            feedback,
        });
    }, [articleId, rateArticleMutation, userId]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRatingArticle(starsCount, feedback);
    }, [handleRatingArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRatingArticle(starsCount);
    }, [handleRatingArticle]);

    if (isLoading) {
        return <Skeleton width="100%" height={120} />;
    }

    const rating = data?.[0];

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

export default ArticleRating;
