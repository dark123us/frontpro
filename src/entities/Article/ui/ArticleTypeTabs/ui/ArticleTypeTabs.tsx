import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'widgets/Tabs';
import { ArticleType } from '../../../model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {
        className,
        value,
        onChangeType,
    } = props;
    const { t } = useTranslation();

    const tabs = useMemo<TabItem[]>(
        () => [
            { value: ArticleType.ALL, content: t('All') },
            { value: ArticleType.IT, content: t('IT') },
            { value: ArticleType.ECONOMICS, content: t('Economics') },
            { value: ArticleType.SCIENCE, content: t('Scince') },
        ],
        [t],
    );

    const onChangeTab = useCallback((newTab: TabItem) => {
        onChangeType(newTab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            tabs={tabs}
            value={value}
            onTabClick={onChangeTab}
            className={classNames('', {}, [className])}
        />

    );
});
