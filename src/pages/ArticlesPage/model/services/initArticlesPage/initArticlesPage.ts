import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

export enum Message {
    ERROR = 'error'
}

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
    >(
        'articlesPage/initArticlesPage',
        async (
            _,
            thunkAPI,
        ) => {
            const {
                getState,
                dispatch,
            } = thunkAPI;
            const inited = getArticlesPageInited(getState());
            if (!inited) {
                dispatch(articlesPageActions.initState());
                dispatch(fetchArticleList({
                    page: 1,

                }));
            }
        },
    );
