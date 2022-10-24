import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'root' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin'),
        )).toEqual({ username: 'admin' });
    });
    test('set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        )).toEqual({ password: '123123' });
    });
});
