import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/widgets/Card';
import { VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/widgets/Modal';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';

interface RatingCardProps {
    className?: string;
    children?: ReactNode;
    title?: string
    feedbackTitle?: string
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void
    onAccept?: (starsCount: number, feedback?: string) => void
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        children,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onSelectStars = useCallback((starsCount: number) => {
        setIsModalOpen(true);
    }, []);

    return (
        <Card
            className={classNames(cls.RatingCard, {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                <VStack max gap="32">
                    <Text title={feedbackTitle} />
                    <Input placeholder={t('comment')} />
                </VStack>
            </Modal>
            {children}
        </Card>
    );
});
