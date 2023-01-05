import { DropDownDirection } from 'shared/types/ui';
import cls2 from '../styles/styles.module.scss';

export const mapDirectionClass: Record<DropDownDirection, string> = {
    'top right': cls2.optionsTopRight,
    'top left': cls2.optionsTopLeft,
    'bottom right': cls2.optionsBottomRight,
    'bottom left': cls2.optionsBottomLeft,
};
