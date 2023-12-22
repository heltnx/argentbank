// createApi et fetchBaseQuery de la bibliothèque Redux Toolkit Query
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Créer une API utilisateur avec RTK Query
export const userApi = createApi({
    // Définir le chemin du reducer pour cette API
    reducerPath: 'userApi',
    // Définir la requête de base pour cette API
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/v1/user' }),
    // Définir les end-point pour cette API
    endpoints: (builder) => ({
        // end-point pour la connexion de l'utilisateur
        login: builder.mutation({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials,
                headers: {
                    "Content-Type": "application/json",
                },
            }),
        }),
        // end-points pour obtenir le profil de l'utilisateur
        getProfile: builder.mutation({
            query: (token) => ({
                url: "/profile",
                method: "POST",
                body: "",
                headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                    Authorization: token,
                },
            }),
        }),
        // end-points pour modifier le username de l'utilisateur
        updateUserName: builder.mutation({
            query: ({ newUserName, token }) => ({
                url: '/profile',
                method: 'PUT',
                body: { userName: newUserName },
                headers: {
                    'Content-Type': 'application/json',
                    accept: "application/json",
                    Authorization: token,
                },
            }),
        }),
    }),
});

// Exporter les hooks générés par RTK Query pour les end-points
export const { useLoginMutation, useGetProfileMutation, useUpdateUserNameMutation } = userApi;
