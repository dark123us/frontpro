import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'widgets/Button';
import cls from './ErrorBoundaryMessage.module.scss';

interface ErrorBoundaryMessageProps {
    className?: string
}

export const ErrorBoundaryMessage: FC<ErrorBoundaryMessageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.errorBoundaryMessage, {}, [className])}>
            <h1>{t('Что-то пошло не так')}</h1>
            <Button onClick={onReload}>{t('reload page')}</Button>
        </div>
    );
};
