import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { RoutePath } from 'app/providers/router/config/routeConfig';

export enum Message {
    ERROR = 'error'
}

export const fetchArticleList = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articlesPage/fetchArticleList',
        async (
            articleId,
            thunkAPI,
        ) => {
            const {
                extra,
                rejectWithValue,
            } = thunkAPI;

            try {
                const response = await extra.api.get<Article[]>(
                    RoutePath.articles,
                    { params: { _expand: 'user' } },

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
