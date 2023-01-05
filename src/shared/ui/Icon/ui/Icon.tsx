import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>
    inverted?: boolean
}

export const Icon = (props:IconProps) => {
    const {
        className,
        Svg,
        inverted = false,
    } = props;
    return (
        <Svg className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])} />
    );
};
