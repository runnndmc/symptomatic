import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import './layout.css'



const Layout = (props) => {
    const {currentUser, handleLogout} = props

    return(
        <>
            <Header 
                currentUser={currentUser} 
                handleLogout={handleLogout}
            />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout