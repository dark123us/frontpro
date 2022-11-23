import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export enum Message {
    ERROR = 'error'
}

interface FetchArticlesListProps {
    page?: number
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

            const { page = 1 } = props;
            const limit = getArticlesPageLimit(getState());

            try {
                const response = await extra.api.get<Article[]>(
                    RoutePath.articles,
                    { params: { _expand: 'user', _limit: limit, _page: page } },

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
