import {FC, useState} from 'react';
import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";


interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props;


    const [isCollapse, setCollapsed] = useState(false);



    const onToggle = () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: isCollapse}, [className])}
             {...otherProps}
        >
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <button onClick={onToggle}>toggle</button>
                <LanguageSwitcher className={cls.lang} />
            </div>

        </div>
    );
};