import {combineReducers, configureStore} from "@reduxjs/toolkit";

import defaultApi from "./api/defaultApi.ts";
import defaultSlice from "./slices/defaultSlice.ts";

export const store = configureStore({
    reducer: combineReducers({
        [defaultApi.reducerPath]: defaultApi.reducer,
        [defaultSlice.name]: defaultSlice.reducer
    }),

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            defaultApi.middleware
        )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
