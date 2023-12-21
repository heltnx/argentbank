import { useSelector } from 'react-redux';

export const useCurrentUserProfile = () => {
    return useSelector((state) => state.user.currentUserProfile);
};

export const useIsAuthenticated = () => {
    return useSelector((state) => state.user.userLoggedIn);
};