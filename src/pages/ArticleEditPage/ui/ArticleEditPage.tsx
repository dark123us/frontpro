import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleEditPage, {}, [className])}>
            Article edit page
        </div>
    );
});

export default ArticleEditPage;
