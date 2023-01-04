import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Card } from 'widgets/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { HTMLAttributeAnchorTarget } from 'react';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../../model/consts/article';
import { Article, ArticleBlockText } from '../../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { ArticleBlockTextComponent } from '../../ArticleBlockTextComponent/ArticleBlockTextComponent';

interface ArticleListItemProps {
    className?: string;
    article: Article
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const {
        className,
        article,
        view = ArticleView.TILE,
        target,
    } = props;
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.TILE) {
        return (
            <AppLink
                target={target}
                to={RoutePath.articleDetails + article.id}
                {...bindHover}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
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
            </AppLink>
        );
    }

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleBlockText;
        return (
            <AppLink
                target={target}
                to={RoutePath.articleDetails + article.id}
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
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
                        <AppLink to={RoutePath.articleDetails + article.id}>
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Read next')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>

                </Card>
            </AppLink>
        );
    }

    return null;
};
