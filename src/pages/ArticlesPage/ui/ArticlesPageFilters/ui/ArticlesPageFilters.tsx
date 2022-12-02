import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import {
    ArticleView,
    ArticleViewSelector, ArticleSortSelector, ArticleSortField,
} from 'entities/Article';
import { Card } from 'shared/ui/Card';
import { Input } from 'shared/ui/Input';
import { SortOrder } from 'shared/types';
import { fetchArticleList } from 'pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import {
    getArticlesPageOrder, getArticlesPageSearch,
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
    const search = useSelector(getArticlesPageSearch);
    const view = useSelector(getArticlesPageView);

    const fetchData = useCallback(() => {
        dispatch(articlesPageActions.setPage(1));
        dispatch(fetchArticleList({ replace: true }));
    }, [dispatch]);

    const debounceFetch = useDebounce(fetchData, 500);

    const onСhangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
        dispatch(articlesPageActions.setPage(1));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageActions.setSearch(newSearch));
        debounceFetch();
    }, [dispatch, debounceFetch]);

    const tabs = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t('All') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.ECONOMICS, content: t('Economics') },
            { value: ArticleType.SCIENCE, content: t('Scince') },
        ],
        [t],
    );

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
                    onViewClick={onСhangeView}
                    className={cls.viewselect}
                />
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    value={search}
                    onChange={onChangeSearch}
                />
            </Card>
            <Tabs
                tabs={tabs}
                value={}
                onTabClick={}
            />
        </div>
    );
};
