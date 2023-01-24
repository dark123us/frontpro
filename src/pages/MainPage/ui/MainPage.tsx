import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Spinner } from '@/shared/ui/Spinner';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/ui/Input';
import { Page } from '@/widgets/Page';
import { StarRating } from '@/shared/ui/StarRating';
import { RatingCard } from '@/entities/Rating';

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
        <Page data-testid="MainPage">
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
            <StarRating />
            <RatingCard
                title={t('How are you the article')}
                feedbackTitle={t('send feedback about article')}
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
