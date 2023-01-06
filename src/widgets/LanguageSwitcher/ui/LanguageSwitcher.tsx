import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

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
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={onLanguagechange}
            className={classNames('', {}, [className])}
        >
            {short ? t('translate_short') : t('translate')}
        </Button>
    );
};
