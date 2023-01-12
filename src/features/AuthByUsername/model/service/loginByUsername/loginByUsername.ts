import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsername {
    username: string;
    password: string;
}

export enum Message {
    ERROR_USERNAME = 'error_username'
}

export const loginByUsername = createAsyncThunk<User, LoginByUsername, ThunkConfig<string>>(
    'login/loginByUsername',
    async (
        authData,
        thunkAPI,
    ) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
        } = thunkAPI;
        try {
            const response = await extra.api.post<User>(
                '/api/login',
                authData,
            );
            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(response.data),
            );
            dispatch(userActions.setAuthData(response.data));
            // extra.navigate?.('/about');
            return response.data;
        } catch (e) {
            // console.error(e);
            return rejectWithValue(
                Message.ERROR_USERNAME,
            );
        }
    },
);
