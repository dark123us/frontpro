import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "widgets/AppLink";
import {useTranslation} from "react-i18next";


interface NavbarProps {
    className?: string
}

export const Navbar = ({className}:NavbarProps ) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])} >
            <div className={cls.links} >
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={cls.mainLink}>{t('Main')}</AppLink>
                <AppLink to={'/about'}>{t('About')}</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

