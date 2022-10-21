import { useTranslation } from 'react-i18next';
import { Spinner } from 'shared/ui/Spinner';
import { Button } from 'shared/ui/Button';
import { useEffect, useState } from 'react';
import { Input } from 'shared/ui/Input/ui/Input';
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

    const [inputValue, onChangeInput] = useState('');

    return (
        <div>
            <h1>{t('Main')}</h1>
            {t('Main content')}
            <Spinner />
            <Button onClick={onError}>{t('getError')}</Button>
            {error}
            <div>
                <Input
                    placeholder={t('placeholder')}
                    value={inputValue}
                    onChange={onChangeInput}
                />
                {inputValue}
            </div>

        </div>
    );
};

export default MainPage;
