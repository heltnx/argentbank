import { useSelector } from 'react-redux';

export const useCurrentUserProfile = () => {
    return useSelector((state) => state.user.currentUserProfile);
};
