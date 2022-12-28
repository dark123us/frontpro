import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { updateProfileData } from './updateProfileData';

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

describe('updateProfileData.test', () => {
    test('success put data', async () => {
        const retData = { ...data, id: 1 };
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: retData }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(retData);
        // expect(thunk.dispatch).toHaveBeenCalledWith(profileActions.updateProfile(data));
        // expect(thunk.dispatch).toHaveBeenCalledTimes(1);
    });

    test('error data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ statud: 403 }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test('validate error data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, first: '' },
            },
        });
        // thunk.api.put.mockReturnValue(Promise.resolve({ statud: 403 }));
        const result = await thunk.callThunk();
        // expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        // expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
