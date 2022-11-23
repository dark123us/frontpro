import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'shared/ui/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import {
    Article, ArticleBlockText, ArticleBlockType, ArticleView,
} from '../../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockTextComponent } from '../../ArticleBlockTextComponent/ArticleBlockTextComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article
    view?: ArticleView
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.TILE,
    } = props;
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();

    const navigate = useNavigate();
    const onOpenArticle = useCallback(() => {
        console.log(article);
        navigate(RoutePath.articleDetails + article.id);
    }, [article, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.TILE) {
        return (
            <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card onClick={onOpenArticle}>
                    <div className={cls.imageWrapper}>
                        <img alt={article.title} src={article.img} className={cls.img} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}

                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </div>
        );
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card onClick={onOpenArticle}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text text={article.title} className={cls.title} />
                    {types}
                    <img alt={article.title} src={article.img} className={cls.img} />
                    {textBlock && (
                        <ArticleBlockTextComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Read next')}
                        </Button>
                        {views}
                    </div>

                </Card>
            </div>
        );
    }

    return null;
};
