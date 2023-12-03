import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*pages */
import Home from '../pages/home/home.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
