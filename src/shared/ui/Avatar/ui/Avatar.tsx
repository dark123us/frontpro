import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../../AppImage';
import UserIcon from '@/shared/assets/icons/user-filled.svg';
import { Icon } from '../../Icon';
import { Skeleton } from '../../Skeleton';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean
}

export const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, src, size = 100, alt, fallbackInverted,
    } = props;
    const styles = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    const errorFallback = <Icon inverted={fallbackInverted} width={size} height={size} Svg={UserIcon} />;
    const fallback = <Skeleton border="50%" width={size} height={size} />;
    return (
        <AppImage
            errorFallback={errorFallback}
            fallback={fallback}
            style={styles}
            alt={alt}
            src={src}
            className={classNames(cls.avatar, {}, [className])}
        />
    );
};
