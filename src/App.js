import React, { useEffect } from 'react';
import Router from './router/router';
// REDUX
import { useGetProfileMutation } from './services/user';
import { useDispatch } from 'react-redux';
import { setUser } from './features/user/userSlice';

const App = () => {
  const [getProfileMutation] = useGetProfileMutation();
  // Dispatcher des actions
  const dispatch = useDispatch();
  const getProfile = async (token) => {
    const profile = await getProfileMutation(`Bearer ${token}`);

    // Vérification de la réponse de la mutation de profil
    if (profile.data !== undefined && profile.data.body !== undefined) {
      // Dispatch de l'action setUser avec le profil de l'utilisateur
      dispatch(setUser(profile.data.body));
    }
  }
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
