import {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, RouteConfig } from 'app/providers/router/config/routeConfig';
import { LoaderPage } from 'pages/LoaderPage';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const el = (
            <Suspense fallback={<LoaderPage />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth>{el}</RequireAuth> : el}
            />
        );
    }, []);
    return (

        <Routes>
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
});
