import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const counterValues = useCounterValue();
    const { increment, decrement } = useCounterActions();

    const inc = () => {
        increment();
    };
    const dec = () => {
        decrement();
    };
    return (
        <div>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <h1 data-testid="value-title">{counterValues}</h1>
            <Button
                data-testid="increment-btn"
                theme={ButtonTheme.OUTLINE}
                square
                onClick={inc}
            >
                +
            </Button>
            <Button
                data-testid="decrement-btn"
                theme={ButtonTheme.OUTLINE}
                square
                onClick={dec}
            >
                -
            </Button>
        </div>
    );
};
