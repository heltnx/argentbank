import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    // Récupère le statut d'authentification de l'utilisateur depuis le store Redux
    const isAuthenticated = useSelector((state) => state.user.userLoggedIn);

    // si vrai vers les routes enfants, si faux navigate redirection (sign)
    return isAuthenticated ? <Outlet /> : <Navigate to="/sign" />;
};

export default ProtectedRoute;
