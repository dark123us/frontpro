import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>
            Article Details Page
        </div>
    );
};

export default ArticleDetailsPage;
