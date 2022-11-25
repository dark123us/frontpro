import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollRestoreSchema } from 'features/ScrollRestore';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollRestore: ScrollRestoreSchema
    // Асинхронные редюсеры
    login?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails ?: ArticleDetailsSchema;
    articleDetailsComments?: ArticleDetailsCommentSchema;
    addCommentForm?: AddCommentFormSchema
    articlesPage?: ArticlesPageSchema

}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
    add:(key:StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;
    getMountReducers: ()=> MountedReducers

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    // navigate?: (to: To, options?: NavigateOptions) => void,
 }

export interface ThunkConfig<T> {
     rejectValue: T;
     extra: ThunkExtraArg;
     state: StateSchema;
 }
