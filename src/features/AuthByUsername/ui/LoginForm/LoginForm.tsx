import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                className={cls.input}
                placeholder={t('Enter username')}
                autofocus
            />
            <Input
                className={cls.input}
                type="password"
                placeholder={t('Enter password')}
            />

            <Button className={cls.loginBtn}>
                {t('Enter')}
            </Button>

        </div>
    );
};
