import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsername {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsername,
    {rejectValue: string}
    >(
        'login/loginByUsername',
        async (authData, thunkApi) => {
            try {
                const response = await axios.post<User>(
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
                thunkApi.dispatch(userActions.setAuthData(response.data));
                return response.data;
            } catch (e) {
                console.error(e);
                return thunkApi.rejectWithValue(
                    'Uncorrected username or password',
                );
            }
        },
    );
