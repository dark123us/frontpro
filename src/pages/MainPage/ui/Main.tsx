import { useTranslation } from 'react-i18next';
import { Spinner } from 'widgets/Spinner';

const Main = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <h1>{t('Main')}</h1>
            {t('Main content')}
            <Spinner />
        </div>
    );
};

export default Main;
