import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { ArticleSortSelector } from 'entities/Article/ui/ArticleSortSelector';
import { getArticlesPageView } from '../../../model/selectors/articlesPageSelectors';
import { articlesPageActions } from '../../../model/slices/articlePageSlice';
import cls from './ArticlesPageFilters.module.scss';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = (props: ArticlesPageFiltersProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);
    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector />
                <ArticleViewSelector view={view} onViewClick={onViewChange} className={cls.viewselect} />
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Search')} />
            </Card>
        </div>
    );
};
