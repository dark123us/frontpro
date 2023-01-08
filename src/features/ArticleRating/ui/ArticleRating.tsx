import { memo, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';

interface ArticleRatingProps {
    className?: string;
    children?: ReactNode;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <RatingCard
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте отзыв')}
            hasFeedback
        >
            {children}
        </RatingCard>
    );
});
