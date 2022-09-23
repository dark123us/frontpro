import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            <h1>{t('Main')}</h1>
            {t('Main content')}

        </div>
    );
};

export default Main;
