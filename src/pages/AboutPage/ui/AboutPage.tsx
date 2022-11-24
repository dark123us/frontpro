import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AboutPage = () => {
    const { t } = useTranslation('about');
    return (
        <Page>
            <h1>{t('About')}</h1>
            {t('текст на странице')}
        </Page>
    );
};

export default AboutPage;
