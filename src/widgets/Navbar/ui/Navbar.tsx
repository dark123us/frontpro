import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import {
    getUserAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { DropDown } from 'shared/ui/Popups/ui/DropDown';
import { Avatar } from 'shared/ui/Avatar';
import { HStack } from 'shared/ui/Stack';
import { Icon } from 'shared/ui/Icon';
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props:NavbarProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    const authButton = (undefined !== authData) ? (
        <HStack gap="16" className={cls.actions}>
            <Button theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
            <DropDown
                className={cls.dropdown}
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
        </HStack>

    ) : (
        <div>
            <Button
                theme={ButtonTheme.CLEAR_INVERTED}
                onClick={onShowModal}
            >
                {t('Enter')}
            </Button>
            {isAuthModal
                && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onCloseModal}
                    />
                )}
        </div>
    );

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <HStack justify="between" max>
                <div className={cls.title}>
                    <Text
                        theme={TextTheme.INVERTED}
                        className={cls.appName}
                        title={t('FrontPro')}
                    />
                </div>
                <HStack justify="end">
                    <div className={cls.links}>
                        <AppLink
                            theme={AppLinkTheme.INVERTED}
                            to={RoutePath[AppRoutes.ARTICLE_CREATE]}
                            className={cls.createBtn}
                        >
                            {t('Create article')}
                        </AppLink>
                        <AppLink
                            theme={AppLinkTheme.INVERTED}
                            to={RoutePath[AppRoutes.MAIN]}
                            className={cls.mainLink}
                        >
                            {t('Main')}
                        </AppLink>
                        <AppLink
                            to={RoutePath[AppRoutes.ABOUT]}
                            className={cls.mainLink}
                        >
                            {t('About')}
                        </AppLink>

                    </div>
                    {authButton}
                </HStack>
            </HStack>
        </header>
    );
});

export default Navbar;
