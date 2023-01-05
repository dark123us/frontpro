import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import { Avatar } from 'shared/ui/Avatar';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { DropDown } from 'shared/ui/Popups';
import { useDispatch, useSelector } from 'react-redux';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import cls from './AvatarDropdown.module.scss';

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
            trigger={<Avatar size={30} src={authData?.avatar} />}
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
