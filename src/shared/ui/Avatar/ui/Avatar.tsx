import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, src, size, alt,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);
    return (
        <img
            style={styles}
            alt={alt}
            src={src}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
