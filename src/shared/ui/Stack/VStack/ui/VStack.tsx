import { memo } from 'react';
import { Flex, FlexProps } from '../../Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = memo((props: VStackProps) => {
    const { align = 'start' } = props;
    return <Flex direction="column" align={align} {...props} />;
});
