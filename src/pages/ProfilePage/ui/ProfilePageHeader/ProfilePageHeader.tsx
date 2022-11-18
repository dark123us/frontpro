import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = (props) => {
    const { className } = props;
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
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE}
            >
                {t('edit')}
            </Button>
        ) : (
            <div className={cls.editBtn}>
                <Button
                    onClick={onSave}
                    className={cls.saveBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('save')}
                </Button>
                <Button
                    onClick={onCancelEdit}
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    {t('cancel')}
                </Button>
            </div>
        );

    return (
        <div className={classNames(cls.profilePageHeader, {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && btn}
        </div>
    );
};
