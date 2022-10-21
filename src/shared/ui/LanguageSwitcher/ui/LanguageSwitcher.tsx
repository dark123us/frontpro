import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface LanguageSwitcherProps {
    className?: string,
    short?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();
    const onLanguagechange = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onLanguagechange}
            className={classNames('', {}, [className])}
        >
            {short ? t('translate_short') : t('translate')}
        </Button>
    );
};
