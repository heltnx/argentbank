// userActions.js
import { setUser as setUserAction, userLoggedOut as userLoggedOutAction } from './userSlice';
import { useDispatch } from 'react-redux';

export const useUserActions = () => {
    const dispatch = useDispatch();
    // fonction qui dispatche l'action setUserAction avec le profil en paramètre
    const setUser = (profile) => {
        dispatch(setUserAction(profile));
    };
    // fonction qui dispatche l'action userLoggedOutAction
    const userLoggedOut = () => {
        dispatch(userLoggedOutAction());
    };

    return { setUser, userLoggedOut };
};
