import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { fetchProfileData, Message } from './fetchProfileData';

const data = {
    username: 'admin',
    age: 35,
    country: Country.Belarus,
    lastname: 'Pimpkin',
    first: 'Vasya',
    currency: Currency.EURO,
    city: 'Minsk',
    avatar: '/assets/test/avatar.jpg',
};

describe('fetchProfileData.test', () => {
    test('success get data', async () => {
        const userValue = { username: 'root', id: 1 };
        // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);

        // expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.updateProfile(data));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(1);
    });

    test('error login', async () => {
        // const userValue = { username: 'root', id: 1 };
        // mockedAxios.post.mockReturnValue(Promise.resolve({ statud: 403 }));
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ statud: 403 }));
        const result = await thunk.callThunk('1');
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');

        // console.log(result);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);

        expect(result.payload).toBe(Message.ERROR);
    });
});
