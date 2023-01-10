import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './AdminPanelPage.module.scss';

interface AdminPanelPageProps {
    className?: string;
    children?: ReactNode;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <Page
            data-testid="AdminPanelPage"
            className={classNames(cls.AdminPanelPage, {}, [className])}
        >
            {t('Admin panel')}
            {children}
        </Page>
    );
});

export default AdminPanelPage;
