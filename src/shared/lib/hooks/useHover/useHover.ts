import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [boolean, UseHoverBind];

export const useHover = () => {
    const [isHover, setHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setHover(true);
    }, [setHover]);
    const onMouseLeave = useCallback(() => {
        setHover(false);
    }, [setHover]);

    return useMemo(
        () => [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
