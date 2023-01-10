import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ForbiddenPage.module.scss';

interface ForbiddenPageProps {
    className?: string;
    children?: ReactNode;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <Page
            data-testid="ForbiddenPage"
            className={classNames(cls.ForbiddenPage, {}, [className])}
        >
            {t('Forbidden page')}
            {children}
        </Page>
    );
});

export default ForbiddenPage;
