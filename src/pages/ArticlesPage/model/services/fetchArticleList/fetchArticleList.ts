import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import {
    getArticlesPageLimit, getArticlesPageNumber,
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useSelector } from 'react-redux';
import { addQueryParams } from 'shared/lib/addQueryParams/addQueryParams';

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

            try {
                addQueryParams({
                    sort, order, search,
                });
                const response = await extra.api.get<Article[]>(
                    RoutePath.articles,
                    {
                        params: {
                            _expand: 'user',
                            _limit: limit,
                            _page: page,
                            _sort: sort,
                            _order: order,
                            q: search,

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
