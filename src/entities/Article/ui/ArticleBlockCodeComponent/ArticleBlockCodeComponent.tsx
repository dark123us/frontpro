import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'widgets/Code';
import { ArticleBlockCode } from '../../model/types/article';
import cls from './ArticleBlockCodeComponent.module.scss';

interface ArticleBlockCodeProps {
    className?: string;
    block: ArticleBlockCode;
}

export const ArticleBlockCodeComponent = memo((props:ArticleBlockCodeProps) => {
    const { className, block } = props;
    return (
        <Code
            className={classNames(cls.articleBlockCode, {}, [className])}
            text={block.code}
        />
    );
});
