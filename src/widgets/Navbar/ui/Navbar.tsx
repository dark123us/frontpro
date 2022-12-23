import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { DropDown } from 'shared/ui/DropDown';
import { Avatar } from 'shared/ui/Avatar';
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
    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const authButton = (undefined !== authData) ? (
        <DropDown
            className={cls.dropdown}
            trigger={<Avatar size={30} src={authData?.avatar} />}
            direction="bottom left"
            items={[
                { content: t('Profile'), href: RoutePath.profile + authData.id },
                { content: t('Logout'), onClick: onLogout },
            ]}
        />

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
            <div className={cls.title}>
                <Text
                    theme={TextTheme.INVERTED}
                    className={cls.appName}
                    title={t('FrontPro')}
                />
            </div>
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
        </header>
    );
});

export default Navbar;
