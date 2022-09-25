import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Routes>
            { Object.values(RouteConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <div className="page-wrapper">
                            <Suspense fallback={<div>{t('Loading')}</div>}>
                                {element}
                            </Suspense>
                        </div>
                    )}
                />
            ))}
        </Routes>
    );
};
