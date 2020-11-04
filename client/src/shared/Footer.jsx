import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return(
        <>
            <footer>
            <h2>This is the footer</h2>
            <Link to={"/symptoms/new"}>
            <h3>Add New Symptom</h3>
          </Link>
          <Link to={"/symptoms"}>
            <h3>My Symptoms</h3>
          </Link>
            </footer>
        </>
    )
}

export default Footer