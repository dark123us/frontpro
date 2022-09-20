import {Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/About.lazy";
import {MainLazy} from "./pages/Main.lazy";
import {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "./theme/useTheme";


const App = () => {
    const {theme, changeTheme} = useTheme()

    return(
        <div className={`app ${theme}`}>
            <button onClick={changeTheme}>Change Theme</button>

                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Suspense fallback={<div>Loading...</div>} >
                        <Routes>
                            <Route path='/about' element={<AboutLazy />}/>
                            <Route path='/' element={<MainLazy />}/>
                        </Routes>
                    </Suspense>

        </div>

    )
}

export default App