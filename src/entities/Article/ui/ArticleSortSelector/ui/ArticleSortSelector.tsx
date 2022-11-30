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
    onChangeField: (sort: ArticleSortField) => void
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const {
        className,
        order,
        sort,
        onChangeOrder,
        onChangeField,
    } = props;
    const { t } = useTranslation();
    const orderOptions = useMemo<SelectOptions[]>(() => [{
        value: 'asc',
        content: t('asc'),
    }, {
        value: 'desc',
        content: t('desc'),

    }], [t]);

    const sortFieldOptions = useMemo<SelectOptions[]>(() => [{
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
            <Select
                label={t('Sort field')}
                options={sortFieldOptions}
                value={sort}
            />
            <Select
                label={t('Sort by')}
                options={orderOptions}
                value={order}
            />
        </div>
    );
};
