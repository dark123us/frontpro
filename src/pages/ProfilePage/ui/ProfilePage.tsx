import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';
import { VStack } from 'shared/ui/Stack';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { EditableProfileCardPageHeader } from 'features/EditableProfileCard/ui/EditableProfileCardPageHeader';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('profile');
    const { id } = useParams<{id: string}>();
    if (!id) {
        return (
            <Text text={t('not found article')} />
        );
    }
    return (
        <Page className={classNames('', {}, [className, cls.profileCard])}>
            <VStack gap="16" max>
                <EditableProfileCardPageHeader />
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
