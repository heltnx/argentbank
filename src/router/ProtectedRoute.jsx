import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const isAuthenticated = useSelector((state) => state.user.userLoggedIn);

    if (!isAuthenticated) {
        return <Navigate to="/sign" />
    }

    return <Outlet />;
};

export default ProtectedRoute;