import {configureStore} from '@reduxjs/toolkit'
import {userAuthSlice} from '../features/userAuthSlice'

export const store = configureStore({
    reducer: {
        userAuth: userAuthSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch