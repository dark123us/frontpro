import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { LoaderPage } from 'pages/LoaderPage';

export const AppRouter = () => (
    <Routes>
        { Object.values(RouteConfig).map(({ path, element }) => (
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
