import React from 'react';
/*layout*/
import NavBar from './navbar/NavBar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <NavBar />
            <main className='container'> {children} </main>
            <Footer />
        </div>
    );
};

export default Layout;