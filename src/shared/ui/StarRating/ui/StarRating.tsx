import { memo, ReactNode, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '@/shared/ui/Icon';

const stars = [1, 2, 3, 4, 5];
interface StarRatingProps {
    className?: string;
    children?: ReactNode;
    onSelect?: (count: number)=> void
    size?: number;
    selectedStars?: number
}

export const StarRating = memo((props: StarRatingProps) => {
    const {
        className,
        children,
        size = 30,
        selectedStars = 0,
        onSelect,
    } = props;

    const [isHovered, setIsHovered] = useState(false);
    const [current, setCurrent] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

    const onHover = (count:number) => () => {
        if (!isSelected) {
            setCurrent(count);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrent(0);
        }
    };

    const onClick = (count: number) => () => {
        if (!isSelected) {
            onSelect?.(count);
            setIsSelected(true);
        }
    };

    return (
        <div
            className={classNames(cls.StarRating, {}, [className])}
        >
            {stars.map((starCount) => (
                <Icon
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: current >= starCount,
                        [cls.normal]: current < starCount,
                        [cls.selected]: isSelected,
                    }, [])}
                    Svg={StarIcon}
                    key={starCount}
                    width={size}
                    height={size}
                    onMouseLeave={onLeave}
                    onMouseEnter={onHover(starCount)}
                    onClick={onClick(starCount)}
                />
            )) }
        </div>
    );
});
