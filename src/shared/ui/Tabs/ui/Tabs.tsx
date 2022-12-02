import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import { Card } from 'shared/ui/Card';
import cls from './Tabs.module.scss';

interface TabItem {
    value: string
    content: ReactNode
}

interface TabsProps {
    className?: string;
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
}

export const Tabs = memo((props: TabsProps) => {
    const {
        tabs,
        value,
        onTabClick,
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.forEach((tab) => {
                <Card key={tab.value} className={cls.card}>
                    {tab.content}
                </Card>;
            })}
        </div>
    );
});
