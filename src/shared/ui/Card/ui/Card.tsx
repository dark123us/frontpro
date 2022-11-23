import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributes } from 'react';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: React.ReactNode;
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        ...othreProps
    } = props;
    return (
        <div
            className={classNames(cls.Card, {}, [className])}
            {...othreProps}
        >
            {children}
        </div>
    );
};
