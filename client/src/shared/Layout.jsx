import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
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
        </>
    )
}

export default Layout