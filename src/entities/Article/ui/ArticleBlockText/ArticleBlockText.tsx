import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockText.module.scss';

interface ArticleBlockTextProps {
    className?: string
}

export const ArticleBlockText: FC<ArticleBlockTextProps> = (props) => {
    const { className } = props;
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleBlockText, {}, [className])}>
            Article block text
        </div>
    );
};
