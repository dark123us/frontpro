import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { ProfileSchema, ValidateProfileError } from '../types/editableProfileCardSchema';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profilerReducer } from './profileSlices';

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

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profilerReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });
    test('update Profile', () => {
        const state: DeepPartial<ProfileSchema> = { data };
        expect(profilerReducer(
            state as ProfileSchema,
            profileActions.updateProfile(data),
        )).toEqual({ form: data, data });
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = { data };
        expect(profilerReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({ form: data, data, validateErrors: [] });
    });

    test('update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profilerReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            form: data, validateErrors: [], isLoading: true, error: undefined,
        });
    });

    test('update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: data,
            isLoading: true,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profilerReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            form: data,
            data,
            validateErrors: [],
            isLoading: false,
            readonly: true,
        });
    });
});
