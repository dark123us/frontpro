import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
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
        <div className={classNames(cls.AdminPanelPage, {}, [className])}>
            {t('Admin panel')}
            {children}
        </div>
    );
});

export default AdminPanelPage;
