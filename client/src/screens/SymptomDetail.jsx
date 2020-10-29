import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../shared/Footer'

const SymptomDetail = (props) => {
    const {currentUser, symptoms} = props
    
 
    const [symptom, setSymptom] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        if(symptoms.length){
        const fetchSymptom = symptoms.find(symptom => symptom.id === Number(id))
        setSymptom(fetchSymptom)
        }
    }, [symptoms, id])

    console.log(symptom)


    return(
        <>
           {
                symptom ? (
                    <div>
                        <h2>{symptom.symptom}</h2>
                    </div>
                ) : <h2>Loading . . .</h2>
            }
        </>
    )
}

export default SymptomDetail