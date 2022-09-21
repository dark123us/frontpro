import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    INVERTED = 'inverted'

}

interface AppLinkProps extends LinkProps{
    className?: string;
    theme?:AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
