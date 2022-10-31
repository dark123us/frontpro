import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleBlockImage.module.scss';

interface ArticleBlockImageProps {
    className?: string
}

export const ArticleBlockImage: FC<ArticleBlockImageProps> = (props) => {
    const { className } = props;
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleBlockImage, {}, [className])}>
            Article block image
        </div>
    );
};
