import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userLoggedIn: false,
    currentUserProfile: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // user Login
        setUser: (state, profile) => {
            state.userLoggedIn = true;
            state.currentUserProfile = profile.payload;
        },
        // user LoggedOut 
        userLoggedOut: (state) => {
            state.userLoggedIn = false;
            state.currentUserProfile = {};
        },
    },
})

// Des créateurs d'action sont générés pour chaque cas.
export const { setUser, userLoggedOut } = userSlice.actions
export default userSlice.reducer