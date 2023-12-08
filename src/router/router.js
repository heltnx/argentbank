// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
                <Route path="/user" element={<User />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;