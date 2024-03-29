import { memo, ReactNode, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RatingCard.module.scss';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Text } from '@/shared/ui/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { isDetectMobileDevice } from '@/shared/lib/DetectMobile/isDetectMobile';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    children?: ReactNode;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
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
        rate = 0,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedBack] = useState('');

    const onSelectStars = useCallback(
        (selectStarsCount: number) => {
            setStarsCount(selectStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

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
                data-testid="RatingCard.Input"
                value={feedback}
                onChange={setFeedBack}
                placeholder={t('comment')}
            />
            <HStack max gap="16" justify="end">
                <Button
                    data-testid="RatingCard.Close"
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    {t('Cancel')}
                </Button>
                <Button
                    data-testid="RatingCard.Send"
                    onClick={acceptHandle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Send')}
                </Button>
            </HStack>
        </VStack>
    );

    const feedbackContent = isDetectMobileDevice() ? (
        <Drawer onClose={cancelHandle} isOpen={isModalOpen} lazy>
            {content}
        </Drawer>
    ) : (
        <Modal isOpen={isModalOpen} lazy>
            {content}
        </Modal>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames(cls.RatingCard, {}, [className])}
        >
            <VStack max align="center" gap="8">
                <Text title={rate > 0 ? t('спасибо за оценку') : title} />
                <StarRating
                    selectedStars={rate}
                    size={40}
                    onSelect={onSelectStars}
                />
            </VStack>
            {feedbackContent}
        </Card>
    );
});
