export { Profile, ProfileSchema } from './model/types/profile';
export {
    profilerReducer,
    profileActions,
} from './model/slices/profileSlices';

export { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
export { ProfileCard } from './ui/ProfileCard/ProfileCard';
