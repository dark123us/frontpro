import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { DropDown } from '@/shared/ui/Popups';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from '@/entities/User';
import cls from './AvatarDropdown.module.scss';
import { RoutePath } from '@/shared/const/router';

interface AvatarDropdownProps {
    className?: string;
    children?: ReactNode;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);

    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (

        <DropDown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            trigger={<Avatar fallbackInverted size={30} src={authData?.avatar} />}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Admin'), href: RoutePath.adminPanel,
                }] : []),

                { content: t('Profile'), href: RoutePath.profile + authData.id },
                { content: t('Logout'), onClick: onLogout },
            ]}
        />
    );
});
