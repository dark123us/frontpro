import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
    ArticleView,
    ArticleViewSelector, ArticleSortSelector, ArticleSortField,
} from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/types';
import {
    getArticlesPageOrder,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../../model/selectors/articlesPageSelectors';
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
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const view = useSelector(getArticlesPageView);
    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
    }, [dispatch]);
    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
    }, [dispatch]);
    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onViewChange}
                    className={cls.viewselect}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    onChange={onChangeSearch}
                />
            </Card>
        </div>
    );
};
