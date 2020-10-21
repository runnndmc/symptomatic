import React from 'react'
import {Link} from 'react-router-dom'

const SymptomCard = (props) => {
    const {symptom, pain, key, id} = props

    return(
        <div key={key}>
            <Link to={`/symptoms/${id}`}>
            <h3>SYMPTOM</h3>
            <p>{symptom}</p>
            <p>{pain}</p>

            </Link>
        </div>
    )
}

export default SymptomCard