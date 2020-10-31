import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        <>
        <h1> Hello! </h1>
        <Link to={'/symptoms/new'}>
        <h3>Add New Symptom</h3>
        </Link>
        <Link to={'/symptoms'}>
            <h3>My Symptoms</h3>
        </Link>
        <h3>My Calendar</h3>
        </>
    )
}

export default Home