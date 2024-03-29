import { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../../Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const { tabs, value, onTabClick, className } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    theme={
                        tab.value === value
                            ? CardTheme.NORMAL
                            : CardTheme.OUTLINE
                    }
                    key={tab.value}
                    className={cls.card}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
});
