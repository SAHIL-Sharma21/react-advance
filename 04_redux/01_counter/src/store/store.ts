//redux store heree
import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../features/countSlice'

const store = configureStore({
    reducer:{
        count: counterSlice
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;