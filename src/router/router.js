import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/*pages */
import Home from '../pages/home/home.jsx';
import Sign from '../pages/sign/Sign.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign" element={<Sign />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
