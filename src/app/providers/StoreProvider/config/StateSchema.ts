import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    // Асинхронные редюсеры
    login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add:(key:StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}