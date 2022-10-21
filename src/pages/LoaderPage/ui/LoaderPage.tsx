import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Spinner } from 'shared/ui/Spinner';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
    className?: string;
}

export const LoaderPage:FC<LoaderPageProps> = (props) => {
    const {
        className,
    } = props;
    return (
        <div className={classNames(cls.loaderPage, {}, [className])}>
            <Spinner />
        </div>
    );
};
