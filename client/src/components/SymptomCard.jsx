import React from 'react'
import {Link} from 'react-router-dom'

import './symptomCard.css'

const SymptomCard = (props) => {
    const {symptom, pain} = props
    
    return(
        <>
            <h2 className='symptom-card-title'>{symptom}</h2>
            <p>{pain}</p>
        </>
    )
}

export default SymptomCard