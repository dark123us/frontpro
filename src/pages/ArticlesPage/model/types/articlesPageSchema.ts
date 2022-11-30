import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from '../../../../entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
    view: ArticleView
    _inited: boolean
    // pagination
    page: number
    limit: number
    hasMore: boolean
    // filters
    order: SortOrder
    sort: ArticleSortField
    search: string
}
