import React from 'react';
/*layout*/
import NavBar from './Navbar/NavBar'
import Footer from './Footer/Footer';

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