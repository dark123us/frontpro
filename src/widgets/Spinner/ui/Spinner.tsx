import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import './Spinner.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner:FC<SpinnerProps> = (props) => {
    const {
        className,
        children,
    } = props;
    return (
        <div className={classNames('lds-spinner', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
