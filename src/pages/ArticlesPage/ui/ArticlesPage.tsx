import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

export const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articlesPage, {}, [className])}>
            Articles page
        </div>
    );
};

export default ArticlesPage;
