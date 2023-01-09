import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { Icon } from '../../Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props:CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button
                onClick={onCopy}
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
            >
                <Icon Svg={CopyIcon} className={cls.copyIcon} />
                {t('Copy')}
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
