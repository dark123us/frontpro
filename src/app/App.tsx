import './styles/index.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";



const App = () => {
    const {theme} = useTheme()

    return(
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <ThemeSwitcher />
            <AppRouter />
        </div>
    )
}

export default App