import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LoginModal } from '@/features/AuthByUsername';
import { getUserAuthData } from '@/entities/User';
import { Text, TextTheme } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import cls from './Navbar.module.scss';
import {
    getRouteAbout,
    getRouteArticleCreate,
    getRouteMain,
} from '@/shared/const/router';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const authButton =
        undefined !== authData ? (
            <HStack gap="16" className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>
        ) : (
            <div>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onShowModal}
                >
                    {t('Enter')}
                </Button>
                {isAuthModal && (
                    <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
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
                            to={getRouteArticleCreate()}
                            className={cls.createBtn}
                        >
                            {t('Create article')}
                        </AppLink>
                        <AppLink
                            theme={AppLinkTheme.INVERTED}
                            to={getRouteMain()}
                            className={cls.mainLink}
                        >
                            {t('Main')}
                        </AppLink>
                        <AppLink to={getRouteAbout()} className={cls.mainLink}>
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
