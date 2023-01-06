import React, {
    InputHTMLAttributes,
    memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    type?: string;
    placeholder?: string;
    autofocus?: boolean;
    readonly?: boolean;
    number?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        readonly,
        number = false,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [caretPosition, setCaretPosition] = useState(0);

    const isNumber = (str: string): boolean => !Number.isNaN(str) && !Number.isNaN(parseFloat(str));

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        if (number && !isNumber(value)) {
            value = '0';
        }
        onChange?.(value);
        setCaretPosition(value.length);
    };

    const [isFocused, setIsFocused] = useState(false);
    const onBlur = () => {
        setIsFocused(false);
    };
    const onFocus = () => {
        setIsFocused(true);
    };
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };
    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const mods = {
        [cls.readonly]: readonly,
    };

    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder
                && (
                    <div className={cls.placeholder}>
                        {`${placeholder}>`}
                    </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    data-testid="input"
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    {...otherProps}
                />
                {isFocused && !readonly
                    && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 7}px` }}
                        />
                    )}
            </div>
        </div>
    );
});
