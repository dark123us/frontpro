import {
    memo, ReactNode, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/widgets/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/widgets/Modal';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { isDetectMobileDevice } from '@/shared/lib/DetectMobile/isDetectMobile';
import { Drawer } from '@/shared/ui/Drawer';

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
    const [starsCount, setStarsCount] = useState(0);
    const [feedback, setFeedBack] = useState('');

    const onSelectStars = useCallback((selectStarsCount: number) => {
        setStarsCount(selectStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const content = (
        <VStack max gap="32">
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedBack}
                placeholder={t('comment')}
            />
            <HStack max gap="16" justify="end">
                <Button
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    {t('Cancel')}
                </Button>
                <Button
                    onClick={acceptHandle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </VStack>
    );

    const feedbackContent = isDetectMobileDevice() ? (
        <Drawer
            onClose={cancelHandle}
            isOpen={isModalOpen}
            lazy
        >
            {content}
        </Drawer>
    ) : (
        <Modal isOpen={isModalOpen} lazy>
            {content}
        </Modal>

    );

    return (
        <Card
            className={classNames(cls.RatingCard, {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarRating size={40} onSelect={onSelectStars} />
            </VStack>
            {feedbackContent}
        </Card>
    );
});
