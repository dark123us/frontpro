
import './index.scss'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutLazy} from "./pages/About.lazy";
import {MainLazy} from "./pages/Main.lazy";
import { Suspense } from 'react';

const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Suspense fallback={<div>Loading...</div>} >
                    <Routes>
                        <Route path='/about' element={<AboutLazy />}/>
                        <Route path='/' element={<MainLazy />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>

    )
}

export default App