import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestoreSchema } from '../types/scrollRestore';

const initialState: ScrollRestoreSchema = {
    scroll: {},
};

const scrollRestoreSlice = createSlice({
    name: 'scrollRestore',
    initialState,
    reducers: {
        setScrollPosition: (
            state,
            { payload }: PayloadAction<{ path: string; position: number }>,
        ) => {
            state.scroll[payload.path] = payload.position;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsername.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.fulfilled, (state) => {
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsername.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: scrollRestoreActions, reducer: scrollRestoreReducer } =
    scrollRestoreSlice;
