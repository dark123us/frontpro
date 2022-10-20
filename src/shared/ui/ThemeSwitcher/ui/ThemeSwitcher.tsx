import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeDark from 'shared/assets/icons/theme-dark.svg';
import ThemeLight from 'shared/assets/icons/theme-light.svg';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }:ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();
    const toggleTheme = () => {
        changeTheme();
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.LIGHT ? <ThemeLight /> : <ThemeDark />}
        </Button>
    );
};

export default ThemeSwitcher;
