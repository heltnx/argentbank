import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLoggedIn: false,
    currentUserProfile: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, profile) => {
            state.userLoggedIn = true;
            state.currentUserProfile = profile.payload;
        },
        // userLoggedOut case reducer
        userLoggedOut: (state) => {
            state.userLoggedIn = false;
            state.currentUserProfile = {};
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, userLoggedOut } = userSlice.actions

export default userSlice.reducer