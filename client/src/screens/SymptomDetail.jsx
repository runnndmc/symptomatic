import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

import {putSymptom} from '../services/symptoms.js'
import Footer from '../shared/Footer.jsx'
import EditSymptom from './EditSymptom'


const SymptomDetail = (props) => {
    const {symptoms, handleDelete} = props
    
    const history= useHistory()
    const [symptom, setSymptom] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        if(symptoms.length){
        const fetchSymptom = symptoms.find(symptom => symptom.id === Number(id))
        setSymptom(fetchSymptom)
        }
    }, [symptoms, id])

    


    return(
        <>
           {
                symptom ? (
                    <div>
                        <h2>{symptom.symptom}</h2>
                        <h2>{symptom.description}</h2>
                        <h2>{symptom.pain_level}</h2>
                        <Link to={`/symptoms/${id}/edit`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(symptom.id)}>Delete</button>
                    </div>
                ) : <h2>You're Symptom was deleted!</h2>
            }
            <Footer />
        </>
    )
}

export default SymptomDetail