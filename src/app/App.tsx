import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getUserMounted, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    const userMounted = useSelector(getUserMounted);

    console.log('mounted');

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                {userMounted && <AppRouter />}
            </div>
        </div>
    );
}

export default App;
