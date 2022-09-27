import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'widgets/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes, RoutePath } from 'app/providers/router/config/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
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
                <AppLink to={RoutePath[AppRoutes.ABOUT]}>
                    {t('About')}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
