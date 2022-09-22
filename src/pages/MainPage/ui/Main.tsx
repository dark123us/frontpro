import {useTranslation} from "react-i18next";

const Main = () => {
    const {t} = useTranslation()
    return (
        <div>
            <h1>{t('Main')}</h1>

        </div>
    );
};

export default Main;