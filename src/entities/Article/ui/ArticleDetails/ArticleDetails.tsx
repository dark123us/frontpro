import { memo, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props:ArticleDetailsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const dataArticle = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId));
        }
    }, [dispatch, articleId]);

    const getContent = () => {
        if (isLoading) {
            return (
                <div>
                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.skeleton} width={600} height={24} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                </div>
            );
        }
        if (error) {
            // eslint-disable-next-line i18next/no-literal-string
            return <Text align={TextAlign.CENTER} title={t('Error loading article')} />;
        }
        return 'Article Details';
    };

    const content = getContent();

    return (
        <DynamicModuleLoader reducers={reducers}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <div className={classNames(cls.articleDetails, {}, [className])}>
                Article Details
                {content}
            </div>
        </DynamicModuleLoader>
    );
});
