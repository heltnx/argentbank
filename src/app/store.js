// Importer la fonction configureStore de la bibliothèque Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'

// Importer l'API utilisateur et le slice utilisateur
import { userApi } from '../services/user';
import userSlice from '../features/user/userSlice';

// Créer le store Redux
export const store = configureStore({
    // Définir les reducers
    reducer: {
        // Utiliser le reducer généré automatiquement par RTK Query pour l'API utilisateur
        [userApi.reducerPath]: userApi.reducer,
        // Utiliser le reducer utilisateur personnalisé
        user: userSlice,
    },
    // Définir les middlewares
    middleware: (getDefaultMiddleware) =>
        // Utiliser les middlewares par défaut et ajouter le middleware de l'API utilisateur généré par RTK Query
        getDefaultMiddleware().concat(userApi.middleware)
});
