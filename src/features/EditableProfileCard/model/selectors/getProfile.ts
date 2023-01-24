import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileFirstName = (state: StateSchema) =>
    state?.profile?.data?.first;
export const getProfileError = (state: StateSchema) => state?.profile?.error;
export const getProfileData = (state: StateSchema) => state?.profile?.data;
export const getProfileForm = (state: StateSchema) => state?.profile?.form;
export const getProfileIsLoading = (state: StateSchema) =>
    state?.profile?.isLoading;
export const getProfileReadonly = (state: StateSchema) =>
    state?.profile?.readonly ?? true;
export const getProfileValidateErrors = (state: StateSchema) =>
    state?.profile?.validateErrors;
