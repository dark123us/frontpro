import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
// import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('main');

    const [error, setError] = useState(false);

    const onError = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) throw new Error('opa');
    }, [error]);

    // <Counter />

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
