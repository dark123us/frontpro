import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text';
import { HTMLAttributeAnchorTarget } from 'react';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ui/ArticleListItemSkeleton';
import { ArticleListItem } from '../../ArticleListItem';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../../model/types/article';

interface ArticleListProps {
    className?: string;
    articles: Article[]
    isLoading?: boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
}

const getSkeleton = (view:ArticleView) => Array.from({
    length: (view === ArticleView.TILE) ? 9 : 3,
}, (_, i) => (<ArticleListItemSkeleton key={i} view={view} className={cls.card} />));

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        view = ArticleView.TILE,
        isLoading,
        target,
    } = props;
    const { t } = useTranslation();

    const isBig = view === ArticleView.LIST;

    const iterPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / iterPerRow);

    const rowRender = ({
        index, isScrolling, key, style,
    }:ListRowProps) => {
        console.log('render');

        const items = [];
        const fromIndex = index * iterPerRow;
        const toIndex = Math.min(fromIndex + iterPerRow, articles.length);
        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(<ArticleListItem
                target={target}
                article={articles[i]}
                view={view}
                className={cls.card}
                key={articles[i].id}
            />);
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}

            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames('', {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Article not found')} />
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem
            target={target}
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
        />
    );

    return (

        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height,
                width,
                registerChild,
                onChildScroll,
                isScrolling,
                scrollTop,
            }) => (
                <div
                    ref={registerChild}
                    className={classNames('', {}, [className, cls[view]])}
                >
                    <List
                        rowCount={rowCount}
                        height={height ?? 700}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}

                    />
                    {isLoading && getSkeleton(view)}
                </div>
            )}
        </WindowScroller>

    // <div className={classNames('', {}, [className, cls[view]])}>
    //     {articles.length > 0
    //         ? articles.map((article) => renderArticle(article)) : null }
    //     {isLoading && getSkeleton(view)}
    // </div>
    );
};
