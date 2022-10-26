import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileData, getProfileForm } from '../../selectors/getProfile';
import { Profile } from '../../types/profile';

export enum Message {
    ERROR = 'error'
}

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
    >(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                getState,
                rejectWithValue,
            } = thunkAPI;

            const formData = getProfileForm(getState());

            try {
                const response = await extra.api.put<Profile>('/profile', formData);
                return response.data;
            } catch (e) {
                console.log(e);
                return rejectWithValue(
                    Message.ERROR,
                );
            }
        },
    );
