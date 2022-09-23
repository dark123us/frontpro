import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Routes>
        { Object.values(RouteConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
