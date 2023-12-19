// Importer la fonction createSlice de la bibliothèque Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Définir l'état initial pour le slice utilisateur
const initialState = {
    userLoggedIn: false,
    currentUserProfile: {}
}

// Créer un slice utilisateur avec Redux Toolkit
export const userSlice = createSlice({
    // Nom du slice
    name: 'user',
    // État initial
    initialState,
    // Reducers
    reducers: {
        // Reducer pour définir l'utilisateur
        setUser: (state, profile) => {
            // Met à jour l'état pour indiquer que l'utilisateur est connecté
            state.userLoggedIn = true;
            // Met à jour le profil de l'utilisateur actuel
            state.currentUserProfile = profile.payload;
        },
        // Reducer pour déconnecter l'utilisateur
        userLoggedOut: (state) => {
            // Met à jour l'état pour indiquer que l'utilisateur est déconnecté
            state.userLoggedIn = false;
            // Réinitialise le profil de l'utilisateur actuel
            state.currentUserProfile = {};
            // Efface le localStorage
            localStorage.clear();
        },
    },
})

// Les créateurs d'action sont générés pour chaque cas reducer.
export const { setUser, userLoggedOut } = userSlice.actions
// Exporter le reducer par défaut pour ce slice
export default userSlice.reducer
