import { classNames } from 'shared/lib/classNames/classNames';
import cls from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';
import React from 'react';

interface PageLoaderrops {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderrops) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
