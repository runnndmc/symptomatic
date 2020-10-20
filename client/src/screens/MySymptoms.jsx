import React from 'react'


const MySyptoms = (props) => {

    const {symptoms, currentUser} = props

    return(
        <>
        {symptoms.map(symptom => (
            <div key={symptom.id}>
                <p>{symptom.symptom}</p>
            </div>
        ))}
            <h1>MY SYMPTOMS</h1>
        </>
    )
}

export default MySyptoms