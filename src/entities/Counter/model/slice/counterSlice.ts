import { CounterSchema } from '../types/counterSchema';
import { buildSlice } from '@/shared/lib/store/buildSlice';

const initialState: CounterSchema = {
    value: 0,
};

const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;
