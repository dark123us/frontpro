import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileForm } from '../../selectors/getProfile';
import { Profile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export enum Message {
    ERROR = 'error',
    ERROR_NOT_FOUND_DATA = 'ERROR_NOT_FOUND_DATA',
}

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<Array<ValidateProfileError>>
    >(
        'profile/updateProfileData',
        async (_, thunkAPI) => {
            const {
                extra,
                getState,
                rejectWithValue,
            } = thunkAPI;

            const formData = getProfileForm(getState());

            const errors = validateProfileData(formData);
            if (errors.length > 0) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>('/profile', formData);
                if (!response.data) {
                    throw new Error();
                }
                return response.data;
            } catch (e) {
                return rejectWithValue(
                    [ValidateProfileError.SERVER_ERROR],
                );
            }
        },
    );
