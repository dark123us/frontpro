import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode } from 'react';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'

interface FlexProps {
    className?: string;
    children?: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,

};

export const Flex = memo((props: FlexProps) => {
    const {
        className,
        children,
        justify = 'start',
        direction = 'row',
        align = 'center',
    } = props;
    const { t } = useTranslation();
    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
    ];
    return (
        <div className={classNames(cls.Flex, {}, classes)}>
            {children}
        </div>
    );
});
