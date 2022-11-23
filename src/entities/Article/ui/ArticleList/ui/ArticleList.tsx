import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ui/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
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
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {getSkeleton(view)}
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map((article) => renderArticle(article)) : null }
        </div>
    );
};
