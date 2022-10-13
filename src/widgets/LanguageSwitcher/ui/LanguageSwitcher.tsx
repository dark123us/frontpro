import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'widgets/Button';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const onLanguagechange = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onLanguagechange}
            className={classNames('', {}, [className])}
        >
            {t('translate')}
        </Button>
    );
};
