import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutes, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <Suspense fallback={<PageLoader />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                )}
            />
        ))}
        {/* <Route {...routeConfig[AppRoutes.MAIN]} />
        <Route {...routeConfig[AppRoutes.ABOUT]} /> */}
    </Routes>
);

export default AppRouter;
