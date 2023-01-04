import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import ListIcon from 'shared/assets/icons/list-24-24.svg';
import TileIcon from 'shared/assets/icons/tiled-24-24.svg';
import { Icon } from 'shared/ui/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ArticleView } from '../../../model/consts/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView
    onViewClick?: (view: ArticleView) => void
}

const viewTypes = [
    {
        view: ArticleView.TILE,
        icon: TileIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = (props: ArticleViewSelectorProps) => {
    const {
        className, onViewClick, view,
    } = props;
    const { t } = useTranslation();

    const onViewChange = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType, i) => (

                // eslint-disable-next-line react/no-array-index-key
                <Button key={i} theme={ButtonTheme.CLEAR} onClick={onViewChange(viewType.view)}>
                    <Icon
                        className={classNames(
                            '',
                            { [cls.notSelected]: viewType.view !== view },
                            [],
                        )}
                        Svg={viewType.icon}
                    />
                </Button>
            ))}
        </div>
    );
};
