import { useTranslation } from 'react-i18next';
import { Spinner } from 'widgets/Spinner';
import { Button } from 'widgets/Button';
import { useEffect, useState } from 'react';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [error, setError] = useState(false);

    const onError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error('opa');
    }, [error]);

    return (
        <div>
            <h1>{t('Main')}</h1>
            {t('Main content')}
            <Spinner />
            <Button onClick={onError}>{t('getError')}</Button>
            {error}
        </div>
    );
};

export default MainPage;
