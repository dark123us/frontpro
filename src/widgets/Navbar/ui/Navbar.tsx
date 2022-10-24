import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';
import { Modal } from 'shared/ui/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { getUserAuthData, userActions } from 'entities/User';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }:NavbarProps) => {
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
        <Button
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={onLogout}
        >
            {t('Logout')}
        </Button>
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
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
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
                {authButton}
            </div>
        </div>
    );
};

export default Navbar;
