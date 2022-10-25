import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult{
    changeTheme: () => void;
    theme: Theme
}

export function useTheme():UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
        document.body.className = newTheme;
    };

    return { theme: theme || Theme.LIGHT, changeTheme };
}
