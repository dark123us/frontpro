import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { updateProfileData } from '../../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../../model/slices/profileSlices';
import { getProfileData, getProfileReadonly } from '../../../model/selectors/getProfile';

interface EditableProfileCardPageHeaderProps {
    className?: string;
    children?: ReactNode;
}

export const EditableProfileCardPageHeader = memo((props: EditableProfileCardPageHeaderProps) => {
    const {
        className,
        children,
    } = props;

    const { t } = useTranslation();

    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);
    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(true));
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);
    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    const btn = readonly
        ? (
            <Button
                onClick={onEdit}
                theme={ButtonTheme.OUTLINE}
                data-testid="EditProfileCardPageHeader.EditButton"
            >
                {t('edit')}
            </Button>
        ) : (
            <HStack gap="8">
                <Button
                    onClick={onSave}
                    theme={ButtonTheme.OUTLINE}
                    data-testid="EditProfileCardPageHeader.SaveButton"
                >
                    {t('save')}
                </Button>
                <Button
                    onClick={onCancelEdit}
                    theme={ButtonTheme.OUTLINE_RED}
                    data-testid="EditProfileCardPageHeader.CancelButton"
                >
                    {t('cancel')}
                </Button>
            </HStack>
        );

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && btn}
        </HStack>
    );
});
