import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Fragment, memo, ReactNode } from 'react';
import { ListBox as HListBox } from '@headlessui/react';
import { Button } from 'shared/ui/Button';
import cls from './ListBox.module.scss';

interface ListBoxProps {
    className?: string;
    children?: ReactNode;
}

export const ListBox = memo((props: ListBoxProps) => {
    const {
        className,
        children,
    } = props;
    const { t } = useTranslation();
    return (
        <HListBox
            as="div"
            className={classNames(cls.ListBox, {}, [className])}
            value={selectedPerson}
            onChange={setSelectedPerson}
        >
            <HListBox.Button className={cls.trigger}>
                <Button>
                    {t('click')}
                </Button>
            </HListBox.Button>
            <HListBox.Options classname={cls.options}>
                <HListBox.Option
                    key={person.id}
                    value={person}
                    className={cls.item}
                />
            </HListBox.Options>
        </HListBox>
    );
});
