// Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.jsx';
/*pages */
import Home from '../pages/home/home.jsx';
import Sign from '../pages/sign/sign.jsx';
import User from '../pages/users/user.jsx';

const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/sign" element={<Sign />} />
                {/* ProtectedRoute engloge la route à protéger*/}
                <Route element={<ProtectedRoute />}>
                    <Route path="/user" element={<User />} />
                </Route>

            </Routes>
        </Router>
    );
};

export default AppRouter;