import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';
import { getProfileForm } from '../../selectors/getProfile';
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
            const profileId = formData?.id;

            const errors = validateProfileData(formData);
            if (errors.length > 0) {
                return rejectWithValue(errors);
            }

            try {
                const response = await extra.api.put<Profile>(`/profile/${profileId}`, formData);
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
