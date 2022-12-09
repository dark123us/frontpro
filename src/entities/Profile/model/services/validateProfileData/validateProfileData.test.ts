import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    test('success validate', async () => {
        const result = validateProfileData(data);
        expect(result.length).toBe(0);
    });

    test('error data', async () => {
        const result = validateProfileData({ ...data, first: '' });
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('error data and age', async () => {
        const result = validateProfileData({ ...data, first: '', age: NaN });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test('empty data', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_CITY,
        ]);
    });

    test('undefined', async () => {
        const result = validateProfileData();
        expect(result).toEqual([
            ValidateProfileError.NO_DATA,
        ]);
    });
});
