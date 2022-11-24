import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { Page } from 'shared/ui/Page';
import { fetchArticleList } from '../model/services/fetchArticleList/fetchArticleList';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slices/articlePageSlice';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,

};

export const ArticlesPage = (props:ArticlesPageProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);
    useInitialEffect(() => {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticleList({
            page: 1,

        }));
    });

    const onViewChange = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.articlesPage, {}, [className])}>
                <ArticleViewSelector view={view} onViewClick={onViewChange} className={cls.viewselect} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
