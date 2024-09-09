//making count slice
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface CounterState {
    count: number
}

const initialState: CounterState = {
    count: 0,
}

const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    }
});


export const {increment, decrement,incrementByAmount} = CounterSlice.actions;
export default CounterSlice.reducer;