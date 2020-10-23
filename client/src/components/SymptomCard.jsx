import React from 'react'
import {Link} from 'react-router-dom'

const SymptomCard = (props) => {
    const {symptom, pain} = props
    
    return(
        <>
            <h3>SYMPTOM</h3>
            <p>{symptom}</p>
            <p>{pain}</p>
        </>
    )
}

export default SymptomCard