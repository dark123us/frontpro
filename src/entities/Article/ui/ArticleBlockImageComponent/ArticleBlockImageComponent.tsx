import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui/Text';
import { ArticleBlockImage } from '../../model/types/article';
import cls from './ArticleBlockImageComponent.module.scss';

interface ArticleBlockImageProps {
    className?: string;
    block: ArticleBlockImage;
}

export const ArticleBlockImageComponent = memo(
    (props: ArticleBlockImageProps) => {
        const { className, block } = props;
        return (
            <div className={classNames(cls.articleBlockImage, {}, [className])}>
                <img src={block.src} className={cls.img} alt={block.title} />
                {block.title && (
                    <Text
                        align={TextAlign.CENTER}
                        title={block.title}
                        className={cls.title}
                    />
                )}
            </div>
        );
    },
);
