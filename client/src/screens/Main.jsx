import React from 'react'
import { Link } from 'react-router-dom'
import MySyptoms from './MySymptoms'


const Main = (props) => {
const {currentUser, symptoms} = props

    return(
        <>
            <h3>Main Page</h3>
 
            <MySyptoms 
                symptoms={symptoms}
                currentUser={currentUser}
            />
        </>
    )
}

export default Main