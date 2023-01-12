import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

export enum Message {
    ERROR = 'error'
}

export const fetchArticleRecommendations = createAsyncThunk<
    Article[],
    void,
    ThunkConfig<string>
    >(
        'articlesDetailsPage/fetchArticleRecommendations',
        async (
            props,
            thunkAPI,
        ) => {
            const {
                extra,
                rejectWithValue,
            } = thunkAPI;
            // const { page = 1 } = props;

            try {
                const response = await extra.api.get<Article[]>(
                    '/api/articles',
                    {
                        params: {
                            _expand: 'user',
                            _limit: 4,
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
