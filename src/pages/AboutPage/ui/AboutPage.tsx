import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <div>
            <h1>{t('About')}</h1>
            {t('текст на странице')}
        </div>
    );
};

export default AboutPage;
