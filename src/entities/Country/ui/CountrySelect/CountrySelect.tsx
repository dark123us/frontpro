import { FC, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { Country } from '../../model/types/country';

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
];

interface CountrySelectProps {
    className?: string
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

export const CountrySelect: FC<CountrySelectProps> = (props) => {
    const {
        className, value, onChange, readonly,
    } = props;
    const { t } = useTranslation();
    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Enter currency')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
};
