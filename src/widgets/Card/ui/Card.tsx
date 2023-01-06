import { HTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export const enum CardTheme {
    NORMAL = 'normal',
OUTLINE = 'outline'
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode;
    theme?: CardTheme
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.NORMAL,
        ...othreProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className, cls[theme]])}
            {...othreProps}
        >
            {children}
        </div>
    );
};
