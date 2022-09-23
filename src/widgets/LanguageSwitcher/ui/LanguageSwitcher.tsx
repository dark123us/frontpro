import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'widgets/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
    const { className } = props;
    const { t, i18n } = useTranslation();
    const onLanguagechange = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={onLanguagechange}
            className={classNames(cls.languageSwitcher, {}, [className])}
        >
            {t('translate')}
        </Button>
    );
};
