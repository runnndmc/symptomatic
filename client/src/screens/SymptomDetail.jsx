import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../shared/Footer'

const SymptomDetail = (props) => {
    const {currentUser, symptoms} = props
    
    const [isLoaded, setLoaded] = useState(false)
    const [symptom, setSymptom] = useState(null)
    const {id} = useParams()

    useEffect(()=> {
        const fetchSymptom = async () => {
            const symptom = symptoms.find(symptom => symptom.id === Number(id))
            setSymptom(symptom)
            setLoaded(true)
        }
        fetchSymptom()
    }, [id])

    console.log(symptom)

    if (!isLoaded) {
        return <h1>Loading...</h1>
    }
    return(
        <>
            <div>
                <h2> Detail</h2>
                <h2>{symptom.symptom}</h2>
            </div>
        </>
    )
}

export default SymptomDetail