import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { Page } from 'shared/ui/Page';
import { AddCommentForm } from '../../../features/AddCommentForm';
import { addCommentForArticle } from '../model/services/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export const ArticleDetailsPage = memo((props:ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const commentsError = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text:string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                <ArticleDetails articleId={id} />
                <Text className={cls.commentTitle} title={t('Comments')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={commentsIsLoading}
                    error={commentsError}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;
