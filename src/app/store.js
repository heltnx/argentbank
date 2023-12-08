import { configureStore } from '@reduxjs/toolkit'
import { userApi } from '../services/user';
import userSlice from '../features/user/userSlice';

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware)
});