import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string
}

const Navbar = ({className}:NavbarProps ) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])} >
            <div className={cls.links} >
                <AppLink theme={AppLinkTheme.INVERTED} to={'/'} className={cls.mainLink}>Home</AppLink>
                <AppLink to={'/about'}>About</AppLink>
            </div>
        </div>
    );
};

export default Navbar;

