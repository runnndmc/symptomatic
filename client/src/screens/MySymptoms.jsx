import React from 'react'
import SymptomCard from '../components/SymptomCard'

const MySymptoms = (props) => {
const {currenUser, symptoms} = props

    return (
       <>
       <h2>My Symptoms</h2>
       <SymptomCard 
            currenUser={currenUser} 
            symptoms={symptoms}
        />
       </>
    )
}

export default MySymptoms