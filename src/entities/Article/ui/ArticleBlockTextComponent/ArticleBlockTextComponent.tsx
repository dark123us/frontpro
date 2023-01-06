import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import cls from './ArticleBlockTextComponent.module.scss';
import { ArticleBlockText } from '../../model/types/article';

interface ArticleBlockTextProps {
    className?: string;
    block: ArticleBlockText
}

export const ArticleBlockTextComponent = memo((props:ArticleBlockTextProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(cls.articleBlockText, {}, [className])}>
            {block.title && <Text title={block.title} className={cls.title} />}
            {block.paragraphs.map((text) => (
                <Text text={text} className={cls.paragraph} key={text} />
            ))}
        </div>
    );
});
