import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    getLoginError,
    getLoginIsLoading,
    getLoginPassword,
    getLoginUsername,
} from '../../model/selectors/getLogin/getLogin';
import {
    loginByUsername,
} from '../../model/service/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    login: loginReducer,

};

export const LoginForm: FC<LoginFormProps> = memo((props) => {
    const {
        // eslint-disable-next-line react/prop-types
        className,
    } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);
    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.loginForm, {}, [className])}>
                {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
                <Input
                    className={cls.input}
                    placeholder={t('Enter username')}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    className={cls.input}
                    type="password"
                    placeholder={t('Enter password')}
                    onChange={onChangePassword}
                    value={password}
                />

                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Enter')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
