import React, { useEffect } from 'react';
import Router from './router/router';
import { useGetProfileMutation } from './services/user';
import { useUserActions } from './features/user/userActions';

const App = () => {
  const [getProfileMutation] = useGetProfileMutation();
  const { setUser } = useUserActions();

  const getProfile = async (token) => {
    try {
      const profile = await getProfileMutation(`Bearer ${token}`);
      if (profile?.data?.body !== undefined) {
        setUser(profile.data.body);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération du profil :', error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getProfile(token);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
