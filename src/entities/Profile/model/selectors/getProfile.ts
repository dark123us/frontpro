import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileFirstName = (state: StateSchema) => state?.profile?.data?.first;
export const getProfileError = (state: StateSchema) => state?.profile?.error;
export const getProfileData = (state: StateSchema) => state?.profile?.data;
export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading;
