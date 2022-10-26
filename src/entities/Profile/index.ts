export { Profile, ProfileSchema } from './model/types/profile';
export {
    profilerReducer,
    profileActions,
} from './model/slices/profileSlices';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileData } from './model/services/updateProfileData/updateProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    getProfileData,
    getProfileError,
    getProfileIsLoading,
    getProfileFirstName,
    getProfileReadonly,
    getProfileForm,
} from './model/selectors/getProfile';
