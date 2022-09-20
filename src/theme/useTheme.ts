import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult{
    changeTheme: () => void;
    theme: Theme

}

export function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log(theme)

    const changeTheme = () => {
        const newTheme = theme === Theme.DARK? Theme.LIGHT : Theme.DARK
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme(newTheme);
    };

    return{theme, changeTheme}
}