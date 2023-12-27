// userActions.js
import { setUser as setUserAction, userLoggedOut as userLoggedOutAction } from './userSlice';
import { useDispatch } from 'react-redux';

export const useUserActions = () => {
    const dispatch = useDispatch();

    const setUser = (profile) => {
        dispatch(setUserAction(profile));
    };

    const userLoggedOut = () => {
        dispatch(userLoggedOutAction());
    };

    return { setUser, userLoggedOut };
};
