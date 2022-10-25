import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig, ThunkExtraArg } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

interface LoginByUsername {
    username: string;
    password: string;
}

export enum Message {
    ERROR = 'error'
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            // console.error(e);
            return rejectWithValue(
                Message.ERROR,
            );
        }
    },
);
