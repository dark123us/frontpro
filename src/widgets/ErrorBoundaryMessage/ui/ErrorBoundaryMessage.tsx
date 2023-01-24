import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface ErrorBoundaryMessageProps {
    className?: string;
}

export const ErrorBoundaryMessage: FC<ErrorBoundaryMessageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames('', {}, [className])}>
            <h1>{t('Что-то пошло не так')}</h1>
            <Button onClick={onReload}>{t('reload page')}</Button>
        </div>
    );
};
