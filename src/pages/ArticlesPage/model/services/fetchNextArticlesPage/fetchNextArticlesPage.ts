import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export enum Message {
    ERROR = 'error'
}

interface FetchArticlesListProps {
    page?: number
}

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticleList',
        async (
            _,
            thunkAPI,
        ) => {
            const {
                getState,
                dispatch,
            } = thunkAPI;
            const hasMore = getArticlesPageHasMore(getState());
            const page = getArticlesPageNumber(getState());
            const limit = getArticlesPageLimit(getState());
            const isLoading = getArticlesPageIsLoading(getState());

            if (hasMore && !isLoading) {
                dispatch(articlesPageActions.setPage(page + 1));
                dispatch(fetchArticleList({
                    page: page + 1,
                }));
            }
        },
    );
