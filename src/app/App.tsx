import './styles/index.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar/Navbar";



const App = () => {
    const {theme, changeTheme} = useTheme()

    return(
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <button onClick={changeTheme}>Change Theme</button>
            <AppRouter />
        </div>
    )
}

export default App