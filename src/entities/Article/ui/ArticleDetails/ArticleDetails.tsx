import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Avatar } from '@/shared/ui/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticleBlockType } from '../../model/consts/article';
import { ArticleBlock } from '../../model/types/article';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import cls from './ArticleDetails.module.scss';
import { ArticleBlockCodeComponent } from '../ArticleBlockCodeComponent/ArticleBlockCodeComponent';
import { ArticleBlockImageComponent } from '../ArticleBlockImageComponent/ArticleBlockImageComponent';
import { ArticleBlockTextComponent } from '../ArticleBlockTextComponent/ArticleBlockTextComponent';

interface ArticleDetailsProps {
    className?: string;
    articleId: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props:ArticleDetailsProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article');
    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleDetailsIsLoading);
    const dataArticle = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(articleId));
        }
    }, [dispatch, articleId]);

    const renderBlocks = useCallback((block:ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleBlockCodeComponent key={block.id} block={block} className={cls.block} />;
        case ArticleBlockType.IMAGE:
            return <ArticleBlockImageComponent key={block.id} block={block} className={cls.block} />;
        case ArticleBlockType.TEXT:
            return <ArticleBlockTextComponent key={block.id} block={block} className={cls.block} />;
        default:
            return null;
        }
    }, []);

    const renderContent = () => {
        if (isLoading) {
            return (
                <>
                    <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.skeleton} width={600} height={24} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                    <Skeleton className={cls.skeleton} width="100%" height={200} />
                </>
            );
        }
        if (error) {
            return <Text align={TextAlign.CENTER} title={t('Error loading article')} />;
        }
        return (
            <>
                <HStack justify="center" max gap="8">
                    <Avatar
                        size={200}
                        src={dataArticle?.img}
                        className={cls.avatar}
                    />
                </HStack>
                <VStack gap="4" max>
                    <Text
                        title={dataArticle?.title}
                        text={dataArticle?.subtitle}
                        size={TextSize.L}
                    />

                    <HStack gap="8">
                        <Icon
                            Svg={EyeIcon}
                        />
                        <Text
                            text={String(dataArticle?.views)}
                        />
                    </HStack>
                    <HStack gap="8">
                        <Icon
                            Svg={CalendarIcon}
                        />
                        <Text
                            text={dataArticle?.createdAt}
                        />
                    </HStack>
                </VStack>
                {dataArticle?.blocks.map((block) => renderBlocks(block))}
            </>
        );
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="16" className={classNames(cls.articleDetails, {}, [className])}>
                {renderContent()}
            </VStack>
        </DynamicModuleLoader>
    );
});
