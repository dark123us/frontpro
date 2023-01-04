import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { VStack } from 'shared/ui/Stack';
import { ArticleView } from '../../../model/consts/article';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ui/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article } from '../../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeleton = (view:ArticleView) => Array.from({
    length: (view === ArticleView.TILE) ? 9 : 3,
}, (_, i) => (<ArticleListItemSkeleton key={i} view={view} className={cls.card} />));

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.TILE,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    // if (isLoading) {
    //     return (
    //         <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
    //             {getSkeleton(view)}
    //         </div>
    //     );
    // }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Article not found')} />
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    );
    if (view === ArticleView.LIST) {
        return (
            <VStack max gap="8" className={classNames('', {}, [className, cls[view]])}>
                {articles.length > 0 ? articles.map((article) => renderArticle(article)) : null }
                {isLoading && getSkeleton(view)}
            </VStack>
        );
    }

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map((article) => renderArticle(article)) : null }
            {isLoading && getSkeleton(view)}
        </div>
    );
};
