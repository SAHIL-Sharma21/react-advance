import {createSlice} from '@reduxjs/toolkit'

interface UserAuthState {
    isAutentiocated: boolean
    user: string | null
}

const initialState: UserAuthState = {
    isAutentiocated: false,
    user: null,
}

export const userAuthSlice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAutentiocated = true;
            state.user = action.payload
        },
        logout:(state) => {
            state.isAutentiocated = false;
            state.user = null;
        },
    }
});

export const {login, logout} = userAuthSlice.actions;
export default userAuthSlice.reducer;