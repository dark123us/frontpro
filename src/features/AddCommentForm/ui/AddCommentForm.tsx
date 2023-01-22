import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader';

import { HStack } from '@/shared/ui/Stack';
import { addCommentFormActions, addCommentFormReducer } from '../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../model/selectors/addCommentFormSelector';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text:string) => void
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = (props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();
    const onCommentTextChange = useCallback((comment:string) => {
        dispatch(addCommentFormActions.setText(comment));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onSendComment, onCommentTextChange, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <HStack
                data-testid="AddCommentForm"
                justify="between"
                max
                className={classNames(cls.AddCommentForm, {}, [className])}
            >
                <Input
                    data-testid="AddCommentForm.Input"
                    className={cls.input}
                    placeholder={t('add comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    data-testid="AddCommentForm.Button"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSendHandler}
                >
                    {t('send')}
                </Button>

            </HStack>
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
