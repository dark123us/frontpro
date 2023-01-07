import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    children?: ReactNode;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <div
            className={classNames(cls.RatingCard, {}, [className])}
        >
            {children}
        </div>
    );
});
