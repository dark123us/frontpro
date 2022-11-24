import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';

jest.mock('../fetchArticleList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
    test('do change page', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
            },
        });

        const result = await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(4); // dispatch вызвался 4 раза
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 }); // функция вызвалась с параметрами
    });

    test("don't change page", async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
            },
        });

        const result = await thunk.callThunk();
        expect(thunk.dispatch).toBeCalledTimes(2); // dispatch вызвался 4 раза
        expect(fetchArticleList).not.toHaveBeenCalled(); // функция не вызвалась
    });
});
