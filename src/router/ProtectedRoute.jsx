import React from 'react'
import { useIsAuthenticated } from '../features/user/userProfile';
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    // Récupère le statut d'authentification de l'utilisateur depuis le store Redux
    const isAuthenticated = useIsAuthenticated();
    // si vrai dirige vers les routes enfants, si faux navigate redirection (sign)
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign" />;
};

export default ProtectedRoute;
