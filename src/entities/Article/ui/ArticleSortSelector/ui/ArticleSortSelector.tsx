import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select, SelectOptions } from 'shared/ui/Select';
import { useMemo } from 'react';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField
    order: SortOrder
    onChangeOrder: (order: SortOrder) => void
    onChangeSort: (sort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        order,
        sort,
        onChangeOrder,
        onChangeSort,
    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOptions<SortOrder>[]>(() => [{
        value: 'asc',
        content: t('asc'),
    }, {
        value: 'desc',
        content: t('desc'),

    }], [t]);

    const sortFieldOptions = useMemo<SelectOptions<ArticleSortField>[]>(() => [{
        value: ArticleSortField.CREATED,
        content: t('by date create'),
    }, {
        value: ArticleSortField.TITLE,
        content: t('by title'),
    }, {
        value: ArticleSortField.VIEWS,
        content: t('by views'),

    }], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select <ArticleSortField>
                label={t('Sort field')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select <SortOrder>
                className={cls.order}
                label={t('Sort by')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
