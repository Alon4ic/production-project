import React, { Suspense, useEffect } from 'react';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
