import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { profilerReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profilerReducer,
};

export const ProfilePage = () => {
    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                {t('ProfilePage')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
