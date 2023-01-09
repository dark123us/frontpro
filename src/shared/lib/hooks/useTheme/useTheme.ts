import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult{
    changeTheme: () => void;
    theme: Theme
}

export function useTheme():UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case (Theme.DARK):
            newTheme = Theme.LIGHT;
            break;
        case (Theme.LIGHT):
            newTheme = Theme.ORANGE;
            break;
        case (Theme.ORANGE):
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
            break;
        }

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
        document.body.className = newTheme;
    };

    return { theme: theme || Theme.LIGHT, changeTheme };
}
