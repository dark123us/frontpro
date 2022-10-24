import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from './getLogin';

describe('getLogin', () => {
    describe('getLoginError', () => {
        test('should return err', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    error: 'error',
                },
            };
            expect(getLoginError(state as StateSchema)).toEqual('error');
        });

        test('empty state', () => {
            const state: DeepPartial<StateSchema> = {
                login: {

                },
            };
            expect(getLoginError(state as StateSchema)).toBeUndefined();
        });
    });

    describe('getLoginUsername', () => {
        test('should return user', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    username: 'root',
                },
            };
            expect(getLoginUsername(state as StateSchema)).toEqual('root');
        });

        test('empty state', () => {
            const state: DeepPartial<StateSchema> = {
                login: {},
            };
            expect(getLoginUsername(state as StateSchema)).toBe('');
        });
    });

    describe('getLoginPassword', () => {
        test('should return password', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    password: 'password',
                },
            };
            expect(getLoginPassword(state as StateSchema)).toEqual('password');
        });

        test('empty state', () => {
            const state: DeepPartial<StateSchema> = {
                login: {},
            };
            expect(getLoginPassword(state as StateSchema)).toBe('');
        });
    });

    describe('getLoginIsLoading', () => {
        test('should return password', () => {
            const state: DeepPartial<StateSchema> = {
                login: {
                    isLoading: true,
                },
            };
            expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
        });

        test('empty state', () => {
            const state: DeepPartial<StateSchema> = {
                login: {},
            };
            expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
        });
    });
});
