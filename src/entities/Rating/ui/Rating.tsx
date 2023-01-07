import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Rating.module.scss';
import { Card } from '@/widgets/Card';

interface RatingProps {
    className?: string;
    children?: ReactNode;
}

export const Rating = memo((props: RatingProps) => {
    const {
        className,
        children,
    } = props;

    return (
        <Card
            className={classNames(cls.Rating, {}, [className])}
        >
            {children}
        </Card>
    );
});
