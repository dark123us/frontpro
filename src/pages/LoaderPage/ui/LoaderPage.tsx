import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Spinner } from '@/shared/ui/Spinner';
import { Page } from '@/widgets/Page';
import cls from './LoaderPage.module.scss';

interface LoaderPageProps {
    className?: string;
}

export const LoaderPage: FC<LoaderPageProps> = (props) => {
    const { className } = props;
    return (
        <Page className={classNames(cls.loaderPage, {}, [className])}>
            <Spinner />
        </Page>
    );
};
