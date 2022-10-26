import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'app/providers/router/config/routeConfig';
import { LoaderPage } from 'pages/LoaderPage';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
    const isAuth = useSelector(getUserAuthData);
    const routes = useMemo(() => Object.values(RouteConfig).filter((val) => !(val.authOnly && !isAuth)), [isAuth]);

    return (
        <Routes>
            { routes.map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            <Suspense fallback={<LoaderPage />}>
                                {element}
                            </Suspense>
                        </div>
                    )}
                />
            ))}
        </Routes>

    );
});
