import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/addQueryParams/addQueryParams';
import {
    getArticlesPageLimit,
    getArticlesPageNumber,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { getRouteArticles } from '@/shared/const/router';

export enum Message {
    ERROR = 'error'
}

interface FetchArticlesListProps {
    replace?: boolean
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    FetchArticlesListProps,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticleList',
        async (
            props,
            thunkAPI,
        ) => {
            const {
                extra,
                rejectWithValue,
                getState,
            } = thunkAPI;
            // const { page = 1 } = props;
            const page = getArticlesPageNumber(getState());
            const limit = getArticlesPageLimit(getState());
            const sort = getArticlesPageSort(getState());
            const order = getArticlesPageOrder(getState());
            const search = getArticlesPageSearch(getState());
            const type = getArticlesPageType(getState());

            try {
                addQueryParams({
                    sort, order, search, type,
                });
                const response = await extra.api.get<Article[]>(
                    getRouteArticles(),
                    {
                        params: {
                            _expand: 'user',
                            _limit: limit,
                            _page: page,
                            _sort: sort,
                            _order: order,
                            q: search,
                            type: type === ArticleType.ALL ? undefined : type,
                        },
                    },

                );
                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue(
                    Message.ERROR,
                );
            }
        },
    );
