import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {RootState} from "@/store";

interface InitialState {
    default: string
}

const initialState: InitialState = {
    default: 'default'
}

const defaultSlice = createSlice({
    name: 'defaultSlice',
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<string>) => {
            state.default = action.payload
        }
    }
})

export const defaultSelector = createSelector(
    (state: RootState) => state.defaultSlice,
    (slice) => slice.default
)

export default defaultSlice
export const {addItem} = defaultSlice.actions