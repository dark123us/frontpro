import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockCode.module.scss';

interface ArticleBlockCodeProps {
    className?: string
}

export const ArticleBlockCode: FC<ArticleBlockCodeProps> = (props) => {
    const { className } = props;
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleBlockCode, {}, [className])}>
            Article block code
        </div>
    );
};
